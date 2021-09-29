import React, { Component } from 'react';
import Grid from '@mui/material/Grid';
import Product from './Product';

export class Main extends Component {
  render() {
    console.log('Main:', this.props.products);
    return (
      <main>
        <Grid container spacing={3}>
          <Grid item xs>
            {this.props.products.map((product) => {
              return <Product key={product.id} product={product} />;
            })}
          </Grid>
          <Grid item xs={6}>
            {/* {this.props.basket} */}
          </Grid>
        </Grid>
      </main>
    );
  }
}

export default Main;
