import * as React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

export const PaginationComponent = () => {
  return (
    <Stack spacing={2}>
      <Pagination count={10} color="primary" />
    </Stack>
  );
};
