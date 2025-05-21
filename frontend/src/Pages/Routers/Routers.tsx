import { Box, Typography, Alert } from "@mui/material";
import { useRouterList } from "../../hooks/useRoutersList";
import { useMemo, useState } from "react";
import { useSortRouters } from "../../hooks/useSortRouters";
import { RoutersFilter } from "../../Components/RoutersTable/RoutersFilter/RoutersFilter";
import { RoutersTable } from "../../Components/RoutersTable/RoutersTable";

export const Routers = () => {
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

  return (
    <Box>
      <Typography variant="h4" mb={3}>
        Routers
      </Typography>
      <RoutersFilter filterType={filterType} setFilterType={setFilterType} />
      {error && (
        <Alert severity="error" sx={{ mb: 2 }}>
          {error}
        </Alert>
      )}
      <RoutersTable
        filteredAndSortedRouters={filteredAndSortedRouters}
        handleSort={handleSort}
        isLoading={isLoading}
        sortDirection={sortDirection}
        sortField={sortField}
      />
    </Box>
  );
};
