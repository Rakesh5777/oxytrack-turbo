import { NoDataFound } from "@/components/noDataFound";
import useCustomSWR from "@/hooks/useCustomSWR";
import { Cylinder, CylinderSizeEnum, CylinderTypeEnum } from "@oxytrack/api-contract";
import { CylindersDataTable } from "./cylinderDataTable";
import { Button } from "@ui/components";
import { Link } from "react-router-dom";
import usePaginationParams from "@/hooks/usePaginationParams";
import { useState } from "react";

export const CylinderDashboard = () => {
  const { pagination, searchTerm, fromFilter, handleSetSearchTerm, setPagination } = usePaginationParams();
  const [selectedTypes, setSelectedTypes] = useState<CylinderTypeEnum[]>([]);
  const [selectedSizes, setSelectedSizes] = useState<CylinderSizeEnum[]>([]);
  const { data, isLoading, error, isInitialLoading } = useCustomSWR(
    { key: "getAllCylinders" },
    pagination.pageSize,
    pagination.pageIndex,
    searchTerm,
    selectedTypes,
  );

  if (isInitialLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error</div>;
  }

  const showEmptyState = data?.totalItemCount === 0 && !searchTerm && selectedTypes.length === 0;

  return (
    <div className="flex flex-col h-full">
      <header className="flex justify-between flex-shirnk-0 px-4 items-center">
        <h3 className="text-xl tracking-tight font-semibold">Cylinders</h3>
        {!showEmptyState && (
          <Link to="create">
            <Button variant="outline">Create Cylinder</Button>
          </Link>
        )}
      </header>
      <div className="flex-grow relative">
        {showEmptyState ? (
          <NoDataFound title="cylinders" routeLink="create" />
        ) : (
          <div className="h-full p-4">
            <CylindersDataTable
              isLoading={isLoading && !fromFilter && !isInitialLoading}
              data={data?.items as Cylinder[]}
              totalItemCount={data?.totalItemCount || 0}
              pagination={pagination}
              selectedTypes={selectedTypes}
              selectedSizes={selectedSizes}
              setSelectedTypes={setSelectedTypes}
              setSelectedSizes={setSelectedSizes}
              handleSetSearchTerm={handleSetSearchTerm}
              handleOnPaginationChange={setPagination}
            />
          </div>
        )}
      </div>
    </div>
  );
};
