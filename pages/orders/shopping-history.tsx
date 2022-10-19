import NextLink from "next/link";
import {Chip, Grid, Typography, Link} from "@mui/material";
import {DataGrid, GridColDef, GridValueGetterParams} from "@mui/x-data-grid";
import {ShopLayout} from "../../components/layouts";


const columns: GridColDef[] = [
    {
        field: "id",
        headerName: "ID",
        width: 100
    },
    {
        field: "fullName",
        headerName: "Nombre completo",
        width: 300
    },
    {
        field: "paid",
        headerName: "Pagada",
        description: "Muestra si la orden está pagada o no",
        width: 200,
        renderCell: (params) => {
            return (
                params.row.paid ? <Chip color="success" label="Pagada" variant="outlined"/> :
                    <Chip color="error" label="Pendiente de pago" variant="outlined"/>
            )
        }
    },
    {
        field: "compra",
        headerName: "Ver compra",
        width: 200,
        sortable: false,
        renderCell: (params) => {
            return (
                <NextLink href={`/orders/${params.row.id}`} passHref>
                    <Link underline="always">
                        Ver compra
                    </Link>
                </NextLink>
            )
        }
    }
]
const rows = [
    {
        id: 1,
        fullName: "Uriel MM",
        paid: true
    },
    {
        id: 2,
        fullName: "Valeria V",
        paid: true
    },
    {
        id: 3,
        fullName: "Melissa Flores",
        paid: false
    },
    {
        id: 4,
        fullName: "Eduardo Ríos",
        paid: false
    },
    {
        id: 5,
        fullName: "Natalia Herrera",
        paid: false
    },
]

const ShoppingHistoryPage = () => {
    return (
        <ShopLayout title="Historial de compras" pageDescription="Historial de compras del cliente">
            <Typography variant="h1" component="h1">Historial de compras</Typography>
            <Grid container>
                <Grid item xs={12} sx={{height: 650, width: "100%"}}>
                    <DataGrid columns={columns} rows={rows} pageSize={10} rowsPerPageOptions={[10]}/>
                </Grid>
            </Grid>
        </ShopLayout>
    );
};

export default ShoppingHistoryPage;
