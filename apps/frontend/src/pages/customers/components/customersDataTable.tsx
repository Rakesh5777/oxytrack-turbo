import { DataTable } from "@/components/datatable";
import { Customer } from "@oxytrack/api-contract";
import { ColumnDef } from "@tanstack/react-table";
import { Button, DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger, Input } from "@ui/components";
import { MoreHorizontal } from "lucide-react";

export const customersTableColumns: ColumnDef<Customer>[] = [
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "type",
    header: "Type",
  },
  {
    accessorKey: "number",
    header: "Number",
  },
  {
    accessorKey: "createdAt",
    header: "Created At",
    cell: ({ row }) => {
      const value = row.getValue("createdAt") as string;
      return new Date(value).toLocaleDateString("en-GB");
    },
  },
  {
    id: "actions",
    cell: ({ row }) => {
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="flex h-8 p-0 m-0 w-8 data-[state=open]:bg-muted">
              <MoreHorizontal className="w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem>Edit</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];

type CustomersDataTableProps = {
  data: Customer[];
  isLoading: boolean;
  handleSetSearchTerm: (value: string) => void;
};

export const CustomersDataTable = ({ data, isLoading, handleSetSearchTerm }: CustomersDataTableProps) => {
  return (
    <div className="h-full flex flex-col gap-3">
      <header className="flex justify-between items-center flex-shrink-0">
        <div>
          <Input
            className="h-8 w-[150px] lg:w-[320px]"
            placeholder="Filter customers..."
            onChange={(event) => handleSetSearchTerm(event?.target?.value)}
          />
        </div>
      </header>
      <DataTable isLoading={isLoading} columns={customersTableColumns} data={data} />
    </div>
  );
};
