import { Grid } from "@mui/material";
import { FC } from "react";
import { InterfaceProduct } from "../../interfaces";
import { ProductCard } from "./ProductCard";
interface Props {
  products: InterfaceProduct[];
}

export const ProductList: FC<Props> = ({ products }) => {
  return (
    <Grid container spacing={4}>
      {products.map((product) => {
        return <ProductCard key={product.slug} product={product} />;
      })}
    </Grid>
  );
};
