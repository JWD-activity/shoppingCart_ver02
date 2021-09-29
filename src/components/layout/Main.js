import React, { Component } from 'react';
import Grid from '@mui/material/Grid';
import Product from '../Product';
import Typography from '@mui/material/Typography';
import { withStyles } from '@mui/styles';

const styles = (theme) => ({
  root: {
    [theme.breakpoints.down('lg')]: {
      justifyContent: 'space-between',
    },
    [theme.breakpoints.down('md')]: {
      justifyContent: 'center',
    },
  },
});

export class Main extends Component {
  render() {
    return (
      <main>
        <Grid
          container
          columns={12}
          sx={{
            rowGap: '2rem',
          }}
        >
          <Grid container item md={12} lg={8} direction='column'>
            <Grid container item mb={1}>
              <Typography variant='h1'>Products</Typography>
            </Grid>
            <Grid
              container
              item
              direction='row'
              sx={{
                columnGap: '2rem',
                rowGap: '2rem',
              }}
              className={this.props.classes.root}
            >
              {this.props.products.map((product) => {
                return (
                  <Grid item key={product.id} sm={10} md={3}>
                    <Product product={product} />
                  </Grid>
                );
              })}
            </Grid>
          </Grid>
          <Grid container item md={12} lg={4} direction='column'>
            <Grid container item>
              <Typography variant='h1' mb={1}>
                Cart Items
              </Typography>
            </Grid>
            <Grid item>{this.props.children}</Grid>
          </Grid>
        </Grid>
      </main>
    );
  }
}

export default withStyles(styles)(Main);
