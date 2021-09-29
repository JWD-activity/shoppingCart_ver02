import React, { Component } from 'react';
import Grid from '@mui/material/Grid';

export class Main extends Component {
  render() {
    console.log(this.props.products);
    return (
      <main>
        <Grid container spacing={3}>
          <Grid item xs>
            {/* {this.props.products} */}
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
