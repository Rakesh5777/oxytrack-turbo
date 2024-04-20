import { DataTable } from "@/components/datatable";
import { Cylinder, CylinderSizeEnum, CylinderTypeEnum } from "@oxytrack/api-contract";
import { ColumnDef, OnChangeFn, PaginationState } from "@tanstack/react-table";
import {
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
  Input,
  MultiSelectDropdown,
} from "@ui/components";
import { MoreHorizontal } from "lucide-react";

export const cylindersTableColumns: ColumnDef<Cylinder>[] = [
  {
    accessorKey: "cylinderId",
    header: "cylinder Id",
  },
  {
    accessorKey: "type",
    header: "Type",
  },
  {
    accessorKey: "size",
    header: "Size",
  },
  {
    accessorKey: "cylinderState",
    header: "State",
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

type CylindersDataTableProps = {
  data: Cylinder[];
  totalItemCount: number;
  isLoading: boolean;
  pagination: PaginationState;
  selectedTypes: CylinderTypeEnum[];
  selectedSizes: CylinderSizeEnum[];
  setSelectedTypes: (selectedTypes: CylinderTypeEnum[]) => void;
  setSelectedSizes: (selectedSizes: CylinderSizeEnum[]) => void;
  handleSetSearchTerm: (value: string) => void;
  handleOnPaginationChange: OnChangeFn<PaginationState>;
};

export const CylindersDataTable = ({
  data,
  isLoading,
  totalItemCount,
  pagination,
  selectedTypes,
  selectedSizes,
  setSelectedTypes,
  setSelectedSizes,
  handleSetSearchTerm,
  handleOnPaginationChange,
}: CylindersDataTableProps) => {
  return (
    <div className="h-full flex flex-col gap-3">
      <header className="flex justify-between md:justify-start items-center gap-2 flex-shrink-0">
        <div>
          <Input
            className="h-8 w-[150px] lg:w-[320px]"
            placeholder="Filter cylinder Ids..."
            onChange={(event) => handleSetSearchTerm(event?.target?.value)}
          />
        </div>
        <div className="flex gap-1">
          <MultiSelectDropdown<CylinderSizeEnum>
            title="Size"
            options={[
              { label: "Type A", value: "TYPE_A" },
              { label: "Type B", value: "TYPE_B" },
              { label: "Type D", value: "TYPE_D" },
            ]}
            selectedLength={0}
            selectedValues={selectedSizes}
            setSelectedValues={setSelectedSizes}
          />
          <MultiSelectDropdown<CylinderTypeEnum>
            title="Type"
            options={[
              { label: "Oxygen", value: "OXYGEN" },
              { label: "Nitruous Oxide", value: "NITRUOUS_OXIDE" },
              { label: "Carbon Dioxide", value: "CARBON_DIOXIDE" },
            ]}
            selectedLength={0}
            selectedValues={selectedTypes}
            setSelectedValues={setSelectedTypes}
          />
        </div>
      </header>
      <div id="datatable" className="flex-grow-1 relative overflow-auto">
        <DataTable
          rowCount={totalItemCount}
          isLoading={isLoading}
          columns={cylindersTableColumns}
          pagination={pagination}
          data={data}
          handleOnPaginationChange={handleOnPaginationChange}
        />
      </div>
    </div>
  );
};
