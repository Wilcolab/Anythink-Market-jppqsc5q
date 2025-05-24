import { Box, Typography, Alert } from "@mui/material";
import { RoutersFilter } from "../../Components/RoutersTable/RoutersPageFilter/RoutersPageFilter";
import { RoutersTable } from "../../Components/RoutersTable/RoutersTable";
import { useRoutersDetailsModal } from "../../hooks/useRoutersDetailsModal";
import { useSortedAndFilteredRouters } from "../../hooks/useSortedAndFilteredRouters";

export const Routers = () => {
  const {
    filterType,
    setFilterType,
    error,
    filteredAndSortedRouters,
    isLoading,
    sortDirection,
    sortField,
    handleSort,
  } = useSortedAndFilteredRouters();
  const { handleRowClick, renderRouterDetailsModal } = useRoutersDetailsModal();

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
        isLoading={isLoading}
        sortDirection={sortDirection}
        sortField={sortField}
        handleSort={handleSort}
        onRowClick={handleRowClick}
      />
      {renderRouterDetailsModal}
    </Box>
  );
};
