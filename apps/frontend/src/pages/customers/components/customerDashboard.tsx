import { NoDataFound } from "@/components/noDataFound";
import useCustomSWR from "@/hooks/useCustomSWR";
import { Customer } from "@oxytrack/api-contract";

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
      <header className="flex-shirnk-0">
        <h3 className="text-xl tracking-tight font-semibold p-4">Customers</h3>
      </header>
      <div className="flex-grow relative">
        {data?.totalItemCount === 0 ? <NoDataFound title="customers" routeLink="create" /> : <CustomerTable customers={data?.items} />}
      </div>
    </div>
  );
};

const CustomerTable = ({ customers }: { customers: any[] }) => {
  return (
    <div className="h-full p-4">
      <div>Total customers : {customers.length}</div>
    </div>
  );
};
