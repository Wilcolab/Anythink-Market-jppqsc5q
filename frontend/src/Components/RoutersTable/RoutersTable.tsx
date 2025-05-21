import { Skeleton, Table, TableBody, TableCell, TableRow } from "@mui/material";
import dayjs from "dayjs";
import { RouterItem, SortDirection, SortField } from "../../types";
import { RoutersTableHead } from "./RoutersTableHead/RoutersTableHead";

interface RoutersTableProps {
  isLoading: boolean;
  handleSort: (field: SortField) => void;
  filteredAndSortedRouters: RouterItem[];
  sortField: SortField;
  sortDirection: SortDirection;
}

export const RoutersTable: React.FC<RoutersTableProps> = ({
  filteredAndSortedRouters,
  handleSort,
  isLoading,
  sortField,
  sortDirection,
}) => {
  return (
    <>
      {isLoading ? (
        Array.from({ length: 3 }).map((_, i) => (
          <Skeleton key={i} variant="rectangular" height={60} sx={{ mb: 2 }} />
        ))
      ) : (
        <Table>
          <RoutersTableHead
            handleSort={handleSort}
            sortDirection={sortDirection}
            sortField={sortField}
          />
          <TableBody>
            {filteredAndSortedRouters.map((router) => (
              <TableRow key={router.id}>
                <TableCell>{router.name}</TableCell>
                <TableCell>{router.type}</TableCell>
                <TableCell>
                  {dayjs(router.updatedAt).format("YYYY-MM-DD HH:mm")}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}
    </>
  );
};
