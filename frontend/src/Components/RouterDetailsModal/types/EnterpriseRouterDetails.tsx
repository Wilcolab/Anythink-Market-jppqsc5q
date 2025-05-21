import { EnterpriseRouter } from "../../../types";
import { Stack, Typography } from "@mui/material";

export const EnterpriseRouterDetails = ({
  router,
}: {
  router: EnterpriseRouter;
}) => (
  <Stack spacing={1}>
    <Typography fontWeight="bold">Enterprise Details</Typography>
    <Typography>Port Count: {router.portCount}</Typography>
    <Typography>Throughput: {router.throughputGbps} Gbps</Typography>
    <Typography>
      Supported Protocols: {router.supportedProtocols.join(", ")}
    </Typography>
  </Stack>
);
