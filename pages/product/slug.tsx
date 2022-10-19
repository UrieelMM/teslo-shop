import { Box, Button, Chip, Grid, Typography } from "@mui/material";
import { ShopLayout } from "../../components/layouts";
import {
  ProductSlideShow,
  ProductSizeSelector,
} from "../../components/products";
import { ItemCounter } from "../../components/ui";
import { initialData } from "../../database/products";

const product = initialData.products[0];

const Slug = () => {
  return (
    <ShopLayout title={product.title} pageDescription={product.description}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={7}>
          <ProductSlideShow images={product.images} />
        </Grid>
        <Grid item xs={12} sm={5}>
          <Box display="flex" flexDirection="column">
            <Typography variant="h1" component="h1">
              {product.title}
            </Typography>
            <Typography variant="h2" component="h2">
              {`$${product.price}`}
            </Typography>
            <Box sx={{ my: 2 }}>
              <Typography variant="subtitle2">Cantidad</Typography>
              <ItemCounter count={1} />
              <ProductSizeSelector
                selectedSize={product.sizes[0]}
                sizes={product.sizes}
              />
            </Box>
            <Button color="secondary" className="circular-btn">
              Agregar al carrito
            </Button>
            {/* <Chip label="No disponible" color="error" variant="outlined" /> */}
            <Box sx={{ mt: 3 }}>
              <Typography sx={{ fontSize: "20px" }} variant="subtitle2">
                Descripción
              </Typography>
              <Typography variant="subtitle2">{product.description}</Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ShopLayout>
  );
};

export default Slug;
