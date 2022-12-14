import { FC, useMemo, useState } from "react";
import NexLink from "next/link";
import {
  Grid,
  CardActionArea,
  Card,
  CardMedia,
  Box,
  Typography,
  Link,
} from "@mui/material";
import { InterfaceProduct } from "../../interfaces";

interface Props {
  product: InterfaceProduct;
}

export const ProductCard: FC<Props> = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false);
  const productImage = useMemo(() => {
    return isHovered
      ? `products/${product.images[0]}`
      : `products/${product.images[1]}`;
  }, [isHovered, product.images]);

  return (
    <Grid
      item
      xs={6}
      sm={4}
      spacing={4}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Card>
        <NexLink href="/product/slug" passHref prefetch={false}>
          <Link>
            <CardActionArea>
              <CardMedia
                component="img"
                image={productImage}
                alt={product.title}
                className="fadeIn"
              />
            </CardActionArea>
          </Link>
        </NexLink>
      </Card>
      <Box sx={{ mt: 1 }} className="fadeIn">
        <Typography fontWeight={700}>{product.title}</Typography>
        <Typography fontWeight={500}>{`$${product.price}`}</Typography>
      </Box>
    </Grid>
  );
};
