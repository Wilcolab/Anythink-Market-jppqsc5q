import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { ROUTER_TYPES } from "../../../types/routers";

interface RoutersFilterProps {
  filterType: string;
  setFilterType: React.Dispatch<React.SetStateAction<string>>;
}

export const RoutersFilter: React.FC<RoutersFilterProps> = ({
  filterType,
  setFilterType,
}) => {
  const renderFilterOptions = ROUTER_TYPES.map((value) => (
    <MenuItem value={value} sx={{ textTransform: "capitalize" }}>
      {value}
    </MenuItem>
  ));
  return (
    <FormControl sx={{ mb: 3, minWidth: 200 }}>
      <InputLabel>Filter by Type</InputLabel>
      <Select
        value={filterType}
        onChange={(e) => setFilterType(e.target.value)}
        label="Filter by Type"
      >
        <MenuItem value="all">All</MenuItem>
        {renderFilterOptions}
      </Select>
    </FormControl>
  );
};
