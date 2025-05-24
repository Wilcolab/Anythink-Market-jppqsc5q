import { TableHead, TableRow } from "@mui/material";
import { SortDirection, SortField } from "../../../types/routers";
import { HEAD_CELLS } from "./constants";
import { RoutersTableHeadCell } from "./RoutersTableHeadCell/RoutersTableHeadCell";

export interface RoutersTableHeadProps {
  sortField: SortField;
  handleSort: (field: SortField) => void;
  sortDirection: SortDirection;
}

export const RoutersTableHead: React.FC<RoutersTableHeadProps> = (props) => {
  const renderHeadCells = HEAD_CELLS.map(({ label, sortKey }) => (
    <RoutersTableHeadCell label={label} sortKey={sortKey} {...props} />
  ));

  return (
    <TableHead>
      <TableRow sx={{ display: "table", width: "100%", tableLayout: "fixed" }}>
        {renderHeadCells}
      </TableRow>
    </TableHead>
  );
};
