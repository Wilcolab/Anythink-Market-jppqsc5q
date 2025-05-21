import { Paper, Table, TableContainer, Box } from "@mui/material";
import { FixedSizeList, ListChildComponentProps } from "react-window";
import AutoSizer, { Size } from "react-virtualized-auto-sizer";
import { RoutersTableHead } from "./RoutersTableHead/RoutersTableHead";
import { RouterItem, SortDirection, SortField } from "../../types";
import { RoutersTableLoader } from "./RoutersTableLoader/RoutersTableLoader";
import { RoutersTableRow } from "./RoutersTableRow/RoutersTableRow";

interface RoutersTableProps {
  isLoading: boolean;
  filteredAndSortedRouters: RouterItem[];
  sortField: SortField;
  sortDirection: SortDirection;
  handleSort: (field: SortField) => void;
  onRowClick: (router: RouterItem) => void;
}

const UPPER_PAGE_HEIGHT = 285;
export const RoutersTable: React.FC<RoutersTableProps> = ({
  filteredAndSortedRouters,
  isLoading,
  sortField,
  sortDirection,
  handleSort,
  onRowClick,
}) => {
  if (isLoading) return <RoutersTableLoader />;

  const Row = ({ index, style }: ListChildComponentProps) => {
    const router = filteredAndSortedRouters[index];
    return (
      <RoutersTableRow
        router={router}
        index={index}
        style={style}
        onRowClick={onRowClick}
      />
    );
  };

  return (
    <Paper
      sx={{
        height: `calc(100vh - ${UPPER_PAGE_HEIGHT}px)`,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <TableContainer component="div" sx={{ flex: "0 0 auto" }}>
        <Table stickyHeader>
          <RoutersTableHead
            handleSort={handleSort}
            sortDirection={sortDirection}
            sortField={sortField}
          />
        </Table>
      </TableContainer>

      <Box sx={{ flex: 1, minHeight: 0 }}>
        <AutoSizer>
          {({ height, width }: Size) => (
            <FixedSizeList
              height={height}
              width={width}
              itemCount={filteredAndSortedRouters.length}
              itemSize={60}
              overscanCount={5}
            >
              {Row}
            </FixedSizeList>
          )}
        </AutoSizer>
      </Box>
    </Paper>
  );
};
