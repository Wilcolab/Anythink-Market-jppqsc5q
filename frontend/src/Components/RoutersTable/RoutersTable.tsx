import dayjs from "dayjs";
import { Table, TableBody, TableCell, TableRow } from "@mui/material";
import { RouterItem, SortDirection, SortField } from "../../types";
import { RoutersTableHead } from "./RoutersTableHead/RoutersTableHead";
import { RoutersTableLoader } from "./RoutersTableLoader/RoutersTableLoader";

interface RoutersTableProps {
  isLoading: boolean;
  filteredAndSortedRouters: RouterItem[];
  sortField: SortField;
  sortDirection: SortDirection;
  handleSort: (field: SortField) => void;
  onRowClick: (router: RouterItem) => void;
}

export const RoutersTable: React.FC<RoutersTableProps> = ({
  filteredAndSortedRouters,
  isLoading,
  sortField,
  sortDirection,
  onRowClick,
  handleSort,
}) => {
  return isLoading ? (
    <RoutersTableLoader />
  ) : (
    <Table>
      <RoutersTableHead
        handleSort={handleSort}
        sortDirection={sortDirection}
        sortField={sortField}
      />
      <TableBody>
        {filteredAndSortedRouters.map((router) => (
          <TableRow key={router.id} onClick={() => onRowClick(router)}>
            <TableCell>{router.name}</TableCell>
            <TableCell>{router.type}</TableCell>
            <TableCell>
              {dayjs(router.updatedAt).format("YYYY-MM-DD HH:mm")}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
