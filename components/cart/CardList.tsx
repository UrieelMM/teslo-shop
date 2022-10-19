import NextLink from "next/link";
import {FC} from "react";
import {
    CardActionArea,
    CardMedia,
    Grid,
    Link,
    Typography,
    Button,
} from "@mui/material";
import {initialData} from "../../database/products";
import {Box} from "@mui/system";
import {ItemCounter} from "../ui";

const productsInCart = [
    initialData.products[0],
    initialData.products[2],
    initialData.products[3],
];

interface Props {
    editable?: boolean;
}

export const CardList: FC<Props> = ({editable}) => {
    return (
        <>
            {productsInCart.map((product) => {
                return (
                    <Grid key={product.slug} spacing={2} sx={{mt: 1}} container>
                        <Grid item xs={3}>
                            <NextLink href="/product/slug" passHref>
                                <Link>
                                    <CardActionArea>
                                        <CardMedia
                                            image={`/products/${product.images[0]}`}
                                            component="img"
                                            sx={{borderRadius: "5px"}}
                                        />
                                    </CardActionArea>
                                </Link>
                            </NextLink>
                        </Grid>
                        <Grid item xs={7}>
                            <Box display="flex" flexDirection="column">
                                <Typography variant="body1">{product.title}</Typography>
                                <Typography variant="body1">
                                    Talla: <strong>M</strong>
                                </Typography>
                                {editable ? (
                                    <ItemCounter count={1}/>
                                ) : (
                                    <Typography variant="body1">
                                        Cantidad: <strong>1</strong>
                                    </Typography>
                                )}
                            </Box>
                        </Grid>
                        <Grid
                            item
                            xs={2}
                            display="flex"
                            alignItems="center"
                            flexDirection="column"
                        >
                            <Typography variant="subtitle1">{`$${product.price}`}</Typography>
                            {editable && (
                                <Button variant="text" color="secondary">
                                    Eliminar
                                </Button>
                            )}
                        </Grid>
                    </Grid>
                );
            })}
        </>
    );
};
