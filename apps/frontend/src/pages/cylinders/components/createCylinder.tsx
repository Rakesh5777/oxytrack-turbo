import useCustomSWR from "@/hooks/useCustomSWR";
import usePaginationParams from "@/hooks/usePaginationParams";
import apis from "@/services/api";
import { zodResolver } from "@hookform/resolvers/zod";
import { Customer, CylinderSizeEnum, CylinderStateEnum, CylinderTypeEnum } from "@oxytrack/api-contract";
import {
  AutoComplete,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbRouterDomLink,
  BreadcrumbSeparator,
  Button,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Icons,
  Input,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@ui/components";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { z } from "zod";
export { AutoComplete };

const createCylinderSchema = z.object({
  cylinderId: z.string().min(1, "Kindly enter id").max(255),
  type: z.nativeEnum(CylinderTypeEnum),
  size: z.nativeEnum(CylinderSizeEnum),
  cylinderState: z.nativeEnum(CylinderStateEnum),
  purchaseDate: z.date().optional(),
});

export const CreateCylinder = () => {
  const navigate = useNavigate();
  const { pagination, searchTerm, handleSetSearchTerm, setPagination } = usePaginationParams({ pageIndex: 0, pageSize: 50 });
  const [isLoading, setIsLoading] = useState(false);

  const { data: customers, error, isInitialLoading } = useCustomSWR({ key: "getCustomers" }, pagination.pageSize, pagination.pageIndex, searchTerm);

  const form = useForm({
    resolver: zodResolver(createCylinderSchema),
    defaultValues: {
      cylinderId: "",
      type: CylinderTypeEnum.Oxygen,
      size: CylinderSizeEnum.A,
      cylinderState: CylinderStateEnum.Full,
      customerId: "",
      purchaseDate: new Date(),
    },
  });

  useEffect(() => {
    console.log(customers?.items);
  }, [customers?.items]);

  if (isInitialLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error</div>;
  }

  const onSubmit = async (values: z.infer<typeof createCylinderSchema>) => {
    setIsLoading(true);
    try {
      await apis.cylinder.createCylinder({ ...values });
      setIsLoading(false);
      navigate("/cylinders");
    } catch (error) {
      setIsLoading(false);
    }
  };

  return (
    <div className="h-full flex flex-col">
      <header className="flex-shirnk-0 p-4">
        <HeaderBreadCrumb />
      </header>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="px-4 md:w-2/3 flex flex-col gap-3">
          <FormField
            control={form.control}
            name="cylinderId"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Cylinder Id</FormLabel>
                <FormControl>
                  <Input placeholder="Ex. AP123242C12E" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="type"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Cylinder Type</FormLabel>
                <FormControl>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem key={CylinderTypeEnum.Oxygen} value={CylinderTypeEnum.Oxygen}>
                        Oxygen
                      </SelectItem>
                      <SelectItem key={CylinderTypeEnum.NitruousOxide} value={CylinderTypeEnum.NitruousOxide}>
                        Nitruous Oxide
                      </SelectItem>
                      <SelectItem key={CylinderTypeEnum.CarbonDioxide} value={CylinderTypeEnum.CarbonDioxide}>
                        Carbon dioxide
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="size"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Cylinder Type</FormLabel>
                <FormControl>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem key={CylinderSizeEnum.A} value={CylinderSizeEnum.A}>
                        Type A
                      </SelectItem>
                      <SelectItem key={CylinderSizeEnum.B} value={CylinderSizeEnum.B}>
                        Type B
                      </SelectItem>
                      <SelectItem key={CylinderSizeEnum.D} value={CylinderSizeEnum.D}>
                        Type D
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="cylinderState"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Cylinder State</FormLabel>
                <FormControl>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem key={CylinderStateEnum.Full} value={CylinderStateEnum.Full}>
                        Full
                      </SelectItem>
                      <SelectItem key={CylinderStateEnum.Empty} value={CylinderStateEnum.Empty}>
                        Empty
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="customerId"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Customer</FormLabel>
                <FormControl>
                  <AutoComplete<Customer>
                    placeholder="Select Customer"
                    options={(customers?.items as Customer[]) || []}
                    valueKey="id"
                    labelKey="name"
                    selectedValue={(customers?.items.find((customer) => customer.id === field.value) as Customer) || null}
                    setSearchTerm={handleSetSearchTerm}
                    setSelectedValue={field.onChange}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="mt-4 md:w-72">
            {isLoading && <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />}
            Create Cylinder
          </Button>
        </form>
      </Form>
    </div>
  );
};

const HeaderBreadCrumb = () => {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbRouterDomLink to="/cylinders">Cylinders</BreadcrumbRouterDomLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage className="text-base font-semibold">Create Cylinder</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
};
