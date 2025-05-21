import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

interface RoutersFilterProps {
  filterType: string;
  setFilterType: React.Dispatch<React.SetStateAction<string>>;
}

export const RoutersFilter: React.FC<RoutersFilterProps> = ({
  filterType,
  setFilterType,
}) => {
  return (
    <FormControl sx={{ mb: 3, minWidth: 200 }}>
      <InputLabel>Filter by Type</InputLabel>
      <Select
        value={filterType}
        onChange={(e) => setFilterType(e.target.value)}
        label="Filter by Type"
      >
        <MenuItem value="all">All</MenuItem>
        <MenuItem value="enterprise">Enterprise</MenuItem>
        <MenuItem value="home">Home</MenuItem>
        <MenuItem value="wifi">WiFi</MenuItem>
      </Select>
    </FormControl>
  );
};
