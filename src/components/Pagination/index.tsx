import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { useEffect } from "react";
import { useApiContext } from "../../contexts/ApiContext";
import { useTheme } from "../../contexts/useTheme";

export const PaginationComponent = () => {
  const { setCurrPage, count } = useApiContext();

  const handleCurrPage = (_: any, page: number) => {
    setCurrPage(page);
  }

  const { isDarkMode } = useTheme()

  useEffect(() => {
    setCurrPage(prev => prev === 0 ? 1 : prev);
    // eslint-disable-next-line 
  }, [])

  return (
    <Stack spacing={2}>
      <Pagination count={count} color={isDarkMode ? "secondary" : "primary" } onChange={handleCurrPage}/>
    </Stack>
  );
};
