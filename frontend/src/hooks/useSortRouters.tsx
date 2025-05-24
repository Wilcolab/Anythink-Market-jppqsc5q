import { useState } from "react";
import { SortDirection, SortField } from "../types/routers";

export const useSortRouters = () => {
  const [sortField, setSortField] = useState<SortField>("updatedAt");
  const [sortDirection, setSortDirection] = useState<SortDirection>("desc");
  const handleSort = (field: SortField) => {
    if (sortField === field) {
      setSortDirection((prev) => (prev === "asc" ? "desc" : "asc"));
    } else {
      setSortField(field);
      setSortDirection("asc");
    }
  };
  return {
    sortField,
    sortDirection,
    handleSort,
  };
};
