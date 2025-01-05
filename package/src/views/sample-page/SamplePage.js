import React from 'react';
import { Container, Grid, Paper, TextField, Typography, Button, Checkbox, FormControlLabel, Select, MenuItem } from '@mui/material';

const SamplePage = () => {
  return (
    <Container maxWidth="lg" style={{ marginTop: '20px' }}>
      <Grid container spacing={3}>
        {/* Billing Details Form */}
        <Grid item xs={12} md={8}>
          <Paper style={{ padding: '20px' }}>
            <Typography variant="h6" gutterBottom>Billing Details</Typography>
            <form>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <TextField required label="First Name" fullWidth />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField required label="Last Name" fullWidth />
                </Grid>
                <Grid item xs={12}>
                  <Select fullWidth defaultValue="India">
                    <MenuItem value="India">India</MenuItem>
                  </Select>
                </Grid>
                <Grid item xs={12}>
                  <TextField required label="Street Address" fullWidth />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField required label="City" fullWidth />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Select fullWidth defaultValue="Gujarat">
                    <MenuItem value="Gujarat">Gujarat</MenuItem>
                  </Select>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField required label="PIN Code" fullWidth />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField required label="Phone" fullWidth />
                </Grid>
                <Grid item xs={12}>
                  <TextField required label="Email" fullWidth />
                </Grid>
                <Grid item xs={12}>
                  <TextField label="Order Notes (optional)" fullWidth multiline rows={4} />
                </Grid>
                <Grid item xs={12}>
                  <FormControlLabel control={<Checkbox required />} label="I have read and agree to the website Terms and Conditions" />
                </Grid>
              </Grid>
            </form>
          </Paper>
        </Grid>

        {/* Order Summary */}
        <Grid item xs={12} md={4}>
          <Paper style={{ padding: '20px' }}>
            <Typography variant="h6" gutterBottom>Your Order</Typography>
            <Typography>Product: Accurate HS10A Handheld Pulse Oximeter</Typography>
            <Typography>Subtotal: ₹15,250.00</Typography>
            <Typography>Shipping: ₹100.00</Typography>
            <Typography variant="h6">Total: ₹15,350.00</Typography>
            <FormControlLabel control={<Checkbox required />} label="I have read and agree to the website Terms and Conditions" />
            <Button variant="contained" color="primary" fullWidth style={{ marginTop: '10px' }}>Place Order</Button>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default SamplePage;
