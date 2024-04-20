import { NoDataFound } from "@/components/noDataFound";
import useCustomSWR from "@/hooks/useCustomSWR";
import usePaginationParams from "@/hooks/usePaginationParams";
import { Customer } from "@oxytrack/api-contract";
import { Button } from "@ui/components";
import { useState } from "react";
import { Link } from "react-router-dom";
import { CustomersDataTable } from "./customersDataTable";

export const CustomerDashboard = () => {
  const { pagination, searchTerm, fromFilter, handleSetSearchTerm, setPagination } = usePaginationParams();
  const [selectedValues, setSelectedValues] = useState<string[]>([]);
  const { data, isLoading, error, isInitialLoading } = useCustomSWR(
    { key: "getCustomers" },
    pagination.pageSize,
    pagination.pageIndex,
    searchTerm,
    selectedValues,
  );

  if (isInitialLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error</div>;
  }

  const showEmptyState = data?.totalItemCount === 0 && !searchTerm && selectedValues.length === 0;

  return (
    <div className="flex flex-col h-full">
      <header className="flex justify-between flex-shirnk-0 px-4 items-center">
        <h3 className="text-xl tracking-tight font-semibold">Customers</h3>
        {!showEmptyState && (
          <Link to="create">
            <Button variant="outline">Create Customer</Button>
          </Link>
        )}
      </header>
      <div className="flex-grow relative">
        {showEmptyState ? (
          <NoDataFound title="customers" routeLink="create" />
        ) : (
          <div className="h-full p-4">
            <CustomersDataTable
              isLoading={isLoading && !fromFilter && !isInitialLoading}
              data={data?.items as Customer[]}
              totalItemCount={data?.totalItemCount || 0}
              pagination={pagination}
              selectedValues={selectedValues}
              setSelectedValues={setSelectedValues}
              handleSetSearchTerm={handleSetSearchTerm}
              handleOnPaginationChange={setPagination}
            />
          </div>
        )}
      </div>
    </div>
  );
};
