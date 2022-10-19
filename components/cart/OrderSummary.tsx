import { Grid, Typography } from "@mui/material";

export const OrderSummary = () => {
  return (
    <Grid container>
      <Grid item xs={6} sx={{ mt: 2 }}>
        <Typography>No. Productos</Typography>
      </Grid>
      <Grid item xs={6} sx={{ mt: 2 }} display="flex" justifyContent="end">
        <Typography>3</Typography>
      </Grid>
      <Grid item xs={6} sx={{ mt: 2 }}>
        <Typography>Subtotal</Typography>
      </Grid>
      <Grid item xs={6} sx={{ mt: 2 }} display="flex" justifyContent="end">
        <Typography>$120.35</Typography>
      </Grid>
      <Grid item xs={6} sx={{ mt: 2 }}>
        <Typography>IVA</Typography>
      </Grid>
      <Grid item xs={6} sx={{ mt: 2 }} display="flex" justifyContent="end">
        <Typography>$13.15</Typography>
      </Grid>
      <Grid item xs={6} sx={{ mt: 2 }}>
        <Typography variant="subtitle1">Total</Typography>
      </Grid>
      <Grid item xs={6} sx={{ mt: 2 }} display="flex" justifyContent="end">
        <Typography variant="subtitle1">$133.47</Typography>
      </Grid>
    </Grid>
  );
};
