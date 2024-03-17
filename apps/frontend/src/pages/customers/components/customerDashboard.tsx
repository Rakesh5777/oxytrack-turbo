import { NoDataFound } from "@/components/noDataFound";
import useCustomSWR from "@/hooks/useCustomSWR";
import useFetch from "@/hooks/useCustomSWR";

export const CustomerDashboard = () => {
  const { data, isLoading, error } = useCustomSWR({ key: "getCustomers", page: 1, pageSize: 10 });
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
