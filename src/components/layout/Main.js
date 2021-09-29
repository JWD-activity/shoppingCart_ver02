import React, { Component } from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Product from './Product';
import { Container, Typography } from '@mui/material';

export class Main extends Component {
  render() {
    console.log('Main:', this.props.products);
    return (
      <main>
        <Grid container columns={12}>
          <Grid container item xs={12} md={8} direction='column'>
            <Grid container item>
              <Typography variant='h6' component='h1'>
                Products
              </Typography>
            </Grid>
            <Grid container item direction='row' spacing={2}>
              {this.props.products.map((product) => {
                return (
                  <Grid item key={product.id}>
                    <Product product={product} />
                  </Grid>
                );
              })}
            </Grid>
          </Grid>
          <Grid container item xs={12} md={4}></Grid>
        </Grid>
      </main>
    );
  }
}

export default Main;
