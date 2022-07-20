import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { useEffect } from "react";
import { useApiContext } from "../../contexts/ApiContext";

export const PaginationComponent = () => {
  const { setCurrPage } = useApiContext();

  const handleCurrPage = (_: any, page: number) => {
    setCurrPage(page);
  }

  useEffect(() => {
    setCurrPage(prev => prev === 0 ? 1 : prev);
    // eslint-disable-next-line 
  }, [])

  return (
    <Stack spacing={2}>
      <Pagination count={10} color="primary" onChange={handleCurrPage} />
    </Stack>
  );
};
