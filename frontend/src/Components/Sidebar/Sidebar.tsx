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
  onClose: () => void;
};

export const Sidebar = ({ open, onClose }: Props) => {
  const navigate = useNavigate();

  const renderRoutes = routes
    .filter(({ sidebarVisibility }) => sidebarVisibility)
    .map(({ path, label }) => (
      <ListItem key={label} disablePadding>
        <ListItemButton
          onClick={() => {
            navigate(path);
            onClose();
          }}
        >
          <ListItemText primary={label} />
        </ListItemButton>
      </ListItem>
    ));

  return (
    <Drawer anchor="left" open={open} onClose={onClose}>
      <List sx={{ width: 250 }}>{renderRoutes}</List>
    </Drawer>
  );
};
