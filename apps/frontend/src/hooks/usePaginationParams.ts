import { PaginationState } from "@tanstack/react-table";
import { useState } from "react";
import useDebounce from "./useDebounce";

interface DefaultValues {
  pageIndex?: number;
  pageSize?: number;
}

function usePaginationParams({ pageIndex = 0, pageSize = 10 }: DefaultValues = {}) {
  const [searchTerm, setSearchTermState] = useState("");
  const [fromFilter, setFromFilter] = useState(false);
  const debouncedSearchTerm = useDebounce(searchTerm);
  const [pagination, setPagination] = useState<PaginationState>({ pageIndex, pageSize });

  const handleSetSearchTerm = (value: string) => {
    setPagination({ pageIndex, pageSize });
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
