import NextLink from "next/link"
import {
    Box,
    Card,
    CardContent,
    Divider,
    Grid,
    Typography,
    Link,
    Chip
} from "@mui/material";
import {CardList, OrderSummary} from "../../components/cart";
import {ShopLayout} from "../../components/layouts";
import {CreditCardOffOutlined, CreditScoreOutlined} from "@mui/icons-material";

const OrderPage = () => {
    return (
        <ShopLayout title="Resumen de la compra 1248573854" pageDescription="Resumen de la compra">
            <Typography variant="h1" component="h1">
                Resumen de la compra: 1248573854
            </Typography>
            {/*<Chip sx={{my: 2}} label="Pendiente de pago" variant="outlined" color="error"*/}
            {/*      icon={<CreditCardOffOutlined/>}/>*/}
            <Chip sx={{my: 2}} label="Orden ya pagada" variant="outlined" color="success"
                  icon={<CreditScoreOutlined/>}/>
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
                                <h1>Pagar</h1>
                                <Chip sx={{my: 2}} label="Orden ya pagada" variant="outlined" color="success"
                                      icon={<CreditScoreOutlined/>}/>
                            </Box>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </ShopLayout>
    );
};

export default OrderPage;
