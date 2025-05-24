import { HomeRouter } from "../../../types/routers";
import { Stack, Typography } from "@mui/material";

export const HomeRouterDetails = ({ router }: { router: HomeRouter }) => (
  <Stack spacing={1}>
    <Typography fontWeight="bold">Home Router Details</Typography>
    <Typography>Connected Devices: {router.connectedDevices}</Typography>
    <Typography>
      Parental Controls Enabled: {router.parentalControlsEnabled ? "Yes" : "No"}
    </Typography>
    <Typography>Max Bandwidth: {router.maxBandwidthMbps} Mbps</Typography>
  </Stack>
);
