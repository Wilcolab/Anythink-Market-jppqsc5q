import { Skeleton } from "@mui/material";

export const RoutersTableLoader = () => {
  return (
    <>
      {Array.from({ length: 10 }).map((_, i) => (
        <Skeleton key={i} variant="rectangular" height={50} sx={{ mb: 2 }} />
      ))}
    </>
  );
};
