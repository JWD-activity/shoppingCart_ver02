import React, { Component } from 'react';
import { withStyles } from '@mui/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const styles = {
  root: {
    backgroundColor: '#F7F8FD',
    borderRadius: 5,
    padding: '1rem',
  },
  btn: {
    padding: 0,
    minWidth: '1.5rem',
    marginRight: '.2rem',
  },
};

export class Basket extends Component {
  render() {
    const { cartItems, onAdd, onRemove } = this.props;
    const itemsPrice = cartItems.reduce(
      (total, currentItem) => total + currentItem.price * currentItem.qty,
      0
    );
    const taxPrice = itemsPrice * 0.1;
    const shippingPrice = itemsPrice > 2000 ? 0 : 50;
    const totalPrice = itemsPrice + taxPrice + shippingPrice;

    return (
      <Box className={this.props.classes.root}>
        <aside>
          {cartItems.length === 0 ? (
            <Typography variant='body1'>Cart is empty!</Typography>
          ) : (
            cartItems.map((item) => (
              <Grid
                container
                key={item.id}
                spacing={0.5}
                columns={12}
                sx={{
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: '1rem',
                }}
              >
                <Grid item sm={4}>
                  <Typography variant='body1'>{item.name}</Typography>
                </Grid>
                <Grid item sm={4}>
                  <Button
                    variant='contained'
                    color='warning'
                    disableElevation
                    className={this.props.classes.btn}
                  >
                    +
                  </Button>
                  <Button
                    variant='contained'
                    disableElevation
                    className={this.props.classes.btn}
                  >
                    -
                  </Button>
                </Grid>
                <Grid item sm={4}>
                  <Typography align='right'>
                    {item.qty} x ${item.price.toFixed(2)}
                  </Typography>
                </Grid>
              </Grid>
            ))
          )}
        </aside>
      </Box>
    );
  }
}

export default withStyles(styles)(Basket);
