import { NoDataFound } from "@/components/noDataFound";
import useCustomSWR from "@/hooks/useCustomSWR";
import { Customer } from "@oxytrack/api-contract";
import { CustomersDataTable } from "./customersDataTable";
import { Button } from "@ui/components";
import { Link } from "react-router-dom";
import { useState } from "react";
import useDebounce from "@/hooks/useDebounce";
import { OnChangeFn, PaginationState } from "@tanstack/react-table";

export const CustomerDashboard = () => {
  const [searchTerm, setSearchTermState] = useState("");
  const [fromFilter, setFromFilter] = useState(false);
  const debouncedSearchTerm = useDebounce(searchTerm);
  const [pagination, setPagination] = useState<PaginationState>({ pageIndex: 0, pageSize: 10 });
  const { data, isLoading, error, isInitialLoading } = useCustomSWR({
    key: "getCustomers",
    ...pagination,
    query: debouncedSearchTerm,
  });

  if (isInitialLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error</div>;
  }

  const showEmptyState = data?.totalItemCount === 0 && !debouncedSearchTerm;

  const onSetSearchTerm = (value: string) => {
    setPagination({ pageIndex: 0, pageSize: 10 });
    setSearchTermState(value);
    setFromFilter(true);
  };

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
              handleSetSearchTerm={onSetSearchTerm}
              handleOnPaginationChange={setPagination}
            />
          </div>
        )}
      </div>
    </div>
  );
};
