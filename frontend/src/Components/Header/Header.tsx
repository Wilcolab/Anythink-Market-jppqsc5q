import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";

type HeaderProps = {
  onMenuClick: () => void;
};

export const Header = ({ onMenuClick }: HeaderProps) => {
  return (
    <header className="App-header">
      <IconButton
        onClick={onMenuClick}
        edge="start"
        sx={{ marginRight: "1rem" }}
      >
        <MenuIcon sx={{ color: "var(--dn-blue)" }} />
      </IconButton>
      <div
        className="container"
        style={{ display: "flex", alignItems: "center" }}
      >
        <h1 className="App-title">DriveNets Dashboard</h1>
      </div>
    </header>
  );
};
