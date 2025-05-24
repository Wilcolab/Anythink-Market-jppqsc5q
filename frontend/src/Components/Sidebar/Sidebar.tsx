import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { routes } from "../../routes/constants";

type Props = {
  open: boolean;
  toggleDrawer: () => void;
};

export const Sidebar = ({ open, toggleDrawer }: Props) => {
  const navigate = useNavigate();

  const renderRoutes = routes
    .filter(({ sidebarVisibility }) => sidebarVisibility)
    .map(({ path, label }) => (
      <ListItem key={label} disablePadding>
        <ListItemButton
          onClick={() => {
            navigate(path);
            toggleDrawer();
          }}
        >
          <ListItemText primary={label} />
        </ListItemButton>
      </ListItem>
    ));

  return (
    <Drawer anchor="left" open={open} onClose={toggleDrawer}>
      <List sx={{ width: 250 }}>{renderRoutes}</List>
    </Drawer>
  );
};
