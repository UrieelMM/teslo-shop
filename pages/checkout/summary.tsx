import NextLink from "next/link"
import {
    Box,
    Button,
    Card,
    CardContent,
    Divider,
    Grid,
    Typography,
    Link
} from "@mui/material";
import {CardList, OrderSummary} from "../../components/cart";
import {ShopLayout} from "../../components/layouts";

const SummaryPage = () => {
    return (
        <ShopLayout title="Resumen de compra" pageDescription="Resumen de la compra">
            <Typography variant="h1" component="h1">
                Resumen de la compra
            </Typography>
            <Grid container>
                <Grid item xs={12} sm={7}>
                    <CardList/>
                </Grid>
                <Grid item xs={12} sm={5}>
                    <Card className="summary-card">
                        <CardContent>
                            <Typography variant="h2" component="h2">
                                Resumen (3 productos)
                            </Typography>
                            <Divider sx={{my: 1}}/>
                            <Box display="flex" justifyContent="space-between" alignItems="center">
                                <Typography variant="subtitle1">
                                    Dirección de entrega
                                </Typography>
                                <NextLink href="/checkout/address" passHref>
                                    <Link underline="always">
                                        Editar dirección de entrega
                                    </Link>
                                </NextLink>
                            </Box>
                            <Typography>Urieel MM</Typography>
                            <Typography>323 Sur 55130 Edo Mex</Typography>
                            <Typography>México</Typography>
                            <Typography>55 31139560</Typography>
                            <Divider sx={{my: 1}}/>
                            <Box display="flex" justifyContent="end">
                                <NextLink href="/cart" passHref>
                                    <Link underline="always">
                                        Editar carrito
                                    </Link>
                                </NextLink>
                            </Box>
                            <OrderSummary/>
                            <Box sx={{mt: 3}}>
                                <Button
                                    color="secondary"
                                    className="circular-btn"
                                    fullWidth
                                    sx={{padding: "10px"}}
                                >
                                    Confirmar compra
                                </Button>
                            </Box>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </ShopLayout>
    );
};

export default SummaryPage;
