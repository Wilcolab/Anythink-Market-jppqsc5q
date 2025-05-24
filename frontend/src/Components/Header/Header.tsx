import MenuIcon from "@mui/icons-material/Menu";
import { Box, Typography, IconButton } from "@mui/material";

type HeaderProps = {
  onMenuClick: () => void;
};

export const Header = ({ onMenuClick }: HeaderProps) => {
  return (
    <Box component="header" className="App-header">
      <IconButton
        onClick={onMenuClick}
        edge="start"
        sx={{ marginRight: "1rem" }}
      >
        <MenuIcon sx={{ color: "var(--dn-blue)" }} />
      </IconButton>

      <Box className="container" sx={{ display: "flex", alignItems: "center" }}>
        <Typography
          component="h1"
          sx={{
            color: "#0047AB",
            fontSize: "1.5rem",
            fontWeight: 600,
            margin: 0,
          }}
        >
          DriveNets Dashboard
        </Typography>
      </Box>
    </Box>
  );
};
