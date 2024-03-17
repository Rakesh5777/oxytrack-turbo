import { NoDataFound } from "@/components/noDataFound";
import useFetch from "@/hooks/useFetch";

export const CustomerDashboard = () => {
  const { data, isLoading, error } = useFetch({ key: "getCustomers", pageSize: 10, page: 1 });
  console.log(data, isLoading, error);
  return (
    <div className="flex flex-col">
      <header className="flex-shirnk-0">
        <h3 className="text-xl tracking-tight font-semibold p-4">Customers</h3>
      </header>
      <div>
        <NoDataFound title="customers" routeLink="create" />
      </div>
    </div>
  );
};
