import { useMemo, useState } from "react";
import { useRouterList } from "./useRoutersList";
import { useSortRouters } from "./useSortRouters";

export const useSortedAndFilteredRouters = () => {
  const { error, isLoading, routersData } = useRouterList();
  const [filterType, setFilterType] = useState<string>("all");
  const { handleSort, sortDirection, sortField } = useSortRouters();

  const filteredAndSortedRouters = useMemo(() => {
    let result = [...routersData];

    if (filterType !== "all") {
      result = result.filter((router) => router.type === filterType);
    }

    result.sort((a, b) => {
      const aValue = a[sortField];
      const bValue = b[sortField];

      if (aValue < bValue) return sortDirection === "asc" ? -1 : 1;
      if (aValue > bValue) return sortDirection === "asc" ? 1 : -1;
      return 0;
    });

    return result;
  }, [routersData, filterType, sortField, sortDirection]);

  return {
    filterType,
    error,
    filteredAndSortedRouters,
    isLoading,
    sortDirection,
    sortField,
    setFilterType,
    handleSort,
  };
};
