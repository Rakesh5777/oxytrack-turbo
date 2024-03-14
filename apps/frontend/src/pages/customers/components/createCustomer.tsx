import { zodResolver } from "@hookform/resolvers/zod";
import { CustomerTypeEnum } from "@oxytrack/api-contract";
import {
  Button,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Textarea,
} from "@ui/components";
import { useForm } from "react-hook-form";
import { z } from "zod";
const isValidIndianPhoneNumber = (value: string): boolean => {
  const phoneNumberRegex = /^[789]\d{9}$/;
  return phoneNumberRegex.test(value);
};

const createCustomerSchema = z.object({
  type: z.nativeEnum(CustomerTypeEnum),
  name: z.string().min(1, "Kindly enter name").max(255),
  number: z
    .string()
    .min(1, "Kindly enter phone number")
    .refine((value) => isValidIndianPhoneNumber(value), {
      message: "Invalid Indian phone number",
    }),
  description: z.string().max(255).optional(),
  emailAddress: z.string().email("Invalid email address").optional(),
  address: z.string().optional(),
  ambulanceNumber: z.string().refine((value) => value === CustomerTypeEnum.Ambulance, { message: "Kindly enter ambulance number" }),
});

export const CreateCustomer = () => {
  const form = useForm({
    resolver: zodResolver(createCustomerSchema),
    defaultValues: {
      type: CustomerTypeEnum.Hospital,
      name: "",
      number: "",
      description: "",
      emailAddress: "",
      address: "",
      ambulanceNumber: "",
    },
  });

  const onSubmit = (values: z.infer<typeof createCustomerSchema>) => {
    console.log(values);
  };

  return (
    <div className="h-full flex flex-col">
      <header className="flex-shirnk-0">
        <h3 className="text-xl tracking-tight font-semibold p-4">Create Customer</h3>
      </header>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="px-4 md:w-2/3 flex flex-col gap-3">
          <FormField
            control={form.control}
            name="type"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Customer Type</FormLabel>
                <FormControl>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value={CustomerTypeEnum.Hospital}>Hospital</SelectItem>
                      <SelectItem value={CustomerTypeEnum.Ambulance}>Ambulance</SelectItem>
                      <SelectItem value={CustomerTypeEnum.Household}>Household</SelectItem>
                      <SelectItem value={CustomerTypeEnum.Laboratory}>Laboratory</SelectItem>
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Customer Name</FormLabel>
                <FormControl>
                  <Input placeholder="Ex. Kishore Hospital" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="number"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Customer Number</FormLabel>
                <FormControl>
                  <Input placeholder="Ex. 9876543210" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="emailAddress"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Customer Email</FormLabel>
                <FormControl>
                  <Input placeholder="Ex. kishore@oxytrack.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="address"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Customer Address</FormLabel>
                <FormControl>
                  <Textarea placeholder="1-105/a 2nd street, Bangalore" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Customer Description</FormLabel>
                <FormControl>
                  <Textarea className={"min-h-[70px]"} placeholder="Ex. A multi-speciality hospital" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button className="mt-4 md:w-72" type="submit">
            Create Customer
          </Button>
        </form>
      </Form>
    </div>
  );
};
