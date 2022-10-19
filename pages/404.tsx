import { Box, Typography } from "@mui/material";
import { ShopLayout } from "../components/layouts/ShopLayout";

const Custom404Page = () => {
  return (
    <ShopLayout
      title="Page Not Found 404"
      pageDescription="No hay nada que mostrar"
    >
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="calc(100vh - 200px)"
        sx={{ flexDirection: { xs: "column", sm: "row" } }}
      >
        <Typography
          variant="h1"
          component="h1"
          fontSize={100}
          fontWeight="bold"
        >
          404 |
        </Typography>
        <Typography marginLeft={2}>
          No hemos encontrado nada que mostrar
        </Typography>
      </Box>
    </ShopLayout>
  );
};

export default Custom404Page;
