import { TableCell, TableSortLabel } from "@mui/material";
import { HeadCell, RoutersTableHeadProps } from "../types";

export const RoutersTableHeadCell: React.FC<
  HeadCell & RoutersTableHeadProps
> = ({ sortKey, label, sortDirection, sortField, handleSort }) => {
  return (
    <TableCell key={label}>
      {sortKey ? (
        <TableSortLabel
          active={sortField === sortKey}
          direction={sortField === sortKey ? sortDirection : "asc"}
          onClick={() => handleSort(sortKey)}
          hideSortIcon={false}
        >
          {label}
        </TableSortLabel>
      ) : (
        label
      )}
    </TableCell>
  );
};
