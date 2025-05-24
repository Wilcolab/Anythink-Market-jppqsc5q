import { Box } from "@mui/material";

export const Home = () => {
  return (
    <Box component="main" className="App-main">
      <Box className="container">
        <Box className="placeholder-container" sx={{ textAlign: "center" }}>
          <Box className="placeholder-icon">🚀</Box>
          <Box component="h2" className="placeholder-title">
            Coming Soon
          </Box>
          <Box className="construction-line" />
          <Box component="p" className="placeholder-text">
            This homepage is currently under construction. In the meantime,
            please use the navigation menu to access other parts of the
            DriveNets Dashboard.
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
