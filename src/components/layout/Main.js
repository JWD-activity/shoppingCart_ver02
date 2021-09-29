import React, { Component } from 'react';
import Grid from '@mui/material/Grid';
import Product from './Product';
import { Container, Typography } from '@mui/material';

export class Main extends Component {
  render() {
    console.log('Main:', this.props.products);
    return (
      <main>
        <Grid container columns={12}>
          <Grid container item md={12} lg={8}>
            <Grid container item>
              <Typography variant='h5' component='h1'>
                Products
              </Typography>
            </Grid>
            <Grid container item spacing={2}>
              {this.props.products.map((product) => {
                return (
                  <Grid item key={product.id}>
                    <Product product={product} />
                  </Grid>
                );
              })}
            </Grid>
          </Grid>
          <Grid container item md={12} lg={4}>
            <Typography variant='h5' component='h1'>
              Basket
            </Typography>
          </Grid>
        </Grid>
      </main>
    );
  }
}

export default Main;
