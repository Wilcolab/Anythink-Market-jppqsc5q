import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Stack,
  Typography,
  Divider,
} from "@mui/material";
import { RouterItem } from "../../types/routers";
import { EnterpriseRouterDetails } from "./types/EnterpriseRouterDetails";
import { HomeRouterDetails } from "./types/HomeRouterDetails";
import { WifiRouterDetails } from "./types/WifiRouterDetails";
import dayjs from "dayjs";

interface Props {
  open: boolean;
  onClose: () => void;
  router: RouterItem | null;
}

export const RouterDetailsModal = ({ open, onClose, router }: Props) => {
  if (!router) return null;

  const renderTypeDetails = () => {
    switch (router.type) {
      case "enterprise":
        return <EnterpriseRouterDetails router={router} />;
      case "home":
        return <HomeRouterDetails router={router} />;
      case "wifi":
        return <WifiRouterDetails router={router} />;
      default:
        return null;
    }
  };

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
      <DialogTitle>{router.name}</DialogTitle>
      <DialogContent dividers>
        <Stack spacing={2}>
          <Typography variant="body2" color="textSecondary">
            ID: {router.id}
          </Typography>
          <Typography>Type: {router.type}</Typography>
          <Typography>
            Coordinates:
            {`${router.coordinates.latitude}, ${router.coordinates.longitude}`}
          </Typography>
          <Typography>
            Updated At: {dayjs(router.updatedAt).format("YYYY-MM-DD HH:mm")}
          </Typography>
          <Typography>
            Created At: {dayjs(router.createdAt).format("YYYY-MM-DD HH:mm")}
          </Typography>
          <Divider />
          {renderTypeDetails()}
        </Stack>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} variant="contained">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};
