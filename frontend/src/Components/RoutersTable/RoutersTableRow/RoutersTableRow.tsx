import { Box, Typography } from "@mui/material";
import dayjs from "dayjs";
import { RouterItem } from "../../../types/routers";

interface RoutersTableRowProps {
  router: RouterItem;
  index: number;
  style: React.CSSProperties;
  onRowClick: (router: RouterItem) => void;
}

export const RoutersTableRow: React.FC<RoutersTableRowProps> = ({
  router,
  style,
  onRowClick,
}) => {
  return (
    <Box
      onClick={() => onRowClick(router)}
      style={style}
      sx={{
        display: "flex",
        width: "100%",
        borderBottom: "1px solid #e0e0e0",
        alignItems: "center",
        padding: "0 16px",
        height: "100%",
        cursor: "pointer",
        "&:hover": { backgroundColor: "#f5f5f5" },
      }}
    >
      <Box sx={{ flex: 1 }}>
        <Typography>{router.name}</Typography>
      </Box>
      <Box sx={{ flex: 1 }}>
        <Typography sx={{textTransform: 'capitalize'}}>{router.type}</Typography>
      </Box>
      <Box sx={{ flex: 1 }}>
        <Typography>
          {dayjs(router.updatedAt).format("YYYY-MM-DD HH:mm")}
        </Typography>
      </Box>
    </Box>
  );
};
