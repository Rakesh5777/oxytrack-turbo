import noDataFoundImg from "@/assets/no-data-found.svg";
import noDataFoundDarkImg from "@/assets/no-data-found-dark.svg";
import { Button, buttonVariants } from "@ui/components/ui/button";
import { Link } from "react-router-dom";

export const NoDataFound = ({ title = "data", routeLink }: { title?: string; routeLink?: string }) => {
  return (
    <div style={{ marginTop: "-5%" }} className="h-full w-full flex flex-col justify-center items-center p-4">
      <img className="dark:hidden" src={noDataFoundImg} alt="no-data-found" />
      <img className="hidden dark:block opacity-90" src={noDataFoundDarkImg} alt="no-data-found" />
      <h3 className="text-xl font-bold tracked-tight dark:opacity-90">No {title} found</h3>
      <p className="text-muted-foreground text-center my-1">Add {title} to view insights.</p>
      {!!routeLink && (
        <Link to={routeLink}>
          <Button variant={"secondary"}>Create {title}</Button>
        </Link>
      )}
    </div>
  );
};
