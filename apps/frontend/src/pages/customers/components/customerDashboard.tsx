import { NoDataFound } from "@/components/noDataFound";
import useCustomSWR from "@/hooks/useCustomSWR";
import { Customer } from "@oxytrack/api-contract";
import { CustomersDataTable } from "./customersDataTable";
import { Button } from "@ui/components";
import { Link } from "react-router-dom";

export const CustomerDashboard = () => {
  const { data, isLoading, error } = useCustomSWR({ key: "getCustomers", page: 1, pageSize: 10 });
  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error</div>;
  }

  return (
    <div className="flex flex-col h-full">
      <header className="flex justify-between flex-shirnk-0 px-4 items-center">
        <h3 className="text-xl tracking-tight font-semibold">Customers</h3>
        {data?.totalItemCount != 0 && (
          <Link to="create">
            <Button variant="outline">Create Customer</Button>
          </Link>
        )}
      </header>
      <div className="flex-grow relative">
        {data?.totalItemCount === 0 ? <NoDataFound title="customers" routeLink="create" /> : <CustomerTable customers={data?.items as Customer[]} />}
      </div>
    </div>
  );
};

const CustomerTable = ({ customers }: { customers: Customer[] }) => {
  return (
    <div className="h-full p-4">
      <CustomersDataTable data={customers} />
    </div>
  );
};
