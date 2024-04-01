import { PaginationState } from "@tanstack/react-table";
import { useState } from "react";
import useDebounce from "./useDebounce";

function usePaginationParams() {
  const [searchTerm, setSearchTermState] = useState("");
  const [fromFilter, setFromFilter] = useState(false);
  const debouncedSearchTerm = useDebounce(searchTerm);
  const [pagination, setPagination] = useState<PaginationState>({ pageIndex: 0, pageSize: 10 });

  const handleSetSearchTerm = (value: string) => {
    setPagination({ pageIndex: 0, pageSize: 10 });
    setSearchTermState(value);
    setFromFilter(true);
  };

  return {
    fromFilter,
    searchTerm: debouncedSearchTerm,
    pagination,
    handleSetSearchTerm,
    setPagination,
  };
}

export default usePaginationParams;
