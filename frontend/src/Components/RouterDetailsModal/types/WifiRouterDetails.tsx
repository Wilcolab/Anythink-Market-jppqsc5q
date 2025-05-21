import { WifiRouter } from "../../../types";
import { Stack, Typography } from "@mui/material";

export const WifiRouterDetails = ({ router }: { router: WifiRouter }) => (
  <Stack spacing={1}>
    <Typography fontWeight="bold">WiFi Access Point</Typography>
    <Typography>WiFi Channels: {router.wifiChannels.join(", ")}</Typography>
    <Typography>
      Dual Band Support: {router.supportsDualBand ? "Yes" : "No"}
    </Typography>
  </Stack>
);
