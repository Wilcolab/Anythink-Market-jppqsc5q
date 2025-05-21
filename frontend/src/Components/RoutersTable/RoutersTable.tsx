import {
  Skeleton,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TableSortLabel,
} from "@mui/material";
import dayjs from "dayjs";
import { RouterItem, SortDirection, SortField } from "../../types";

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
          <TableHead>
            <TableRow>
              <TableCell>
                <TableSortLabel
                  active={sortField === "name"}
                  direction={sortField === "name" ? sortDirection : "asc"}
                  onClick={() => handleSort("name")}
                >
                  Name
                </TableSortLabel>
              </TableCell>
              <TableCell>Type</TableCell>
              <TableCell>
                <TableSortLabel
                  active={sortField === "updatedAt"}
                  direction={sortField === "updatedAt" ? sortDirection : "asc"}
                  onClick={() => handleSort("updatedAt")}
                >
                  Last Updated
                </TableSortLabel>
              </TableCell>
            </TableRow>
          </TableHead>
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
