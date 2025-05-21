import { TableCell, TableHead, TableRow, TableSortLabel } from "@mui/material";
import { SortDirection, SortField } from "../../../types";

interface RoutersTableHeadProps {
  sortField: SortField;
  handleSort: (field: SortField) => void;
  sortDirection: SortDirection;
}

interface HeadCell {
  label: string;
  sortKey?: SortField;
}

const HEAD_CELLS: HeadCell[] = [
  { label: "Name", sortKey: "name" },
  { label: "Type" },
  { label: "Last Updated", sortKey: "updatedAt" },
];

export const RoutersTableHead: React.FC<RoutersTableHeadProps> = ({
  handleSort,
  sortField,
  sortDirection,
}) => {
  const renderHeadCells = HEAD_CELLS.map(({ label, sortKey }) => (
    <TableCell key={label}>
      {sortKey ? (
        <TableSortLabel
          active={sortField === sortKey}
          direction={sortField === sortKey ? sortDirection : "asc"}
          onClick={() => handleSort(sortKey)}
        >
          {label}
        </TableSortLabel>
      ) : (
        label
      )}
    </TableCell>
  ));

  return (
    <TableHead>
      <TableRow>{renderHeadCells}</TableRow>
    </TableHead>
  );
};
