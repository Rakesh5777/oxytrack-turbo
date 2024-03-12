import { NoDataFound } from "@/components/noDataFound";

export const CustomerDashboard = () => {
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
