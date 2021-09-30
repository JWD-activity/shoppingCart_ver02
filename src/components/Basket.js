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
      <aside className={this.props.classes.root}>
        {cartItems.length === 0 ? (
          <Typography variant='body1'>Cart is empty!</Typography>
        ) : (
          <Grid container>
            {cartItems.map((item) => (
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
                    onClick={() => onAdd(item)}
                  >
                    +
                  </Button>
                  <Button
                    variant='contained'
                    disableElevation
                    className={this.props.classes.btn}
                    onClick={() => onRemove(item)}
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
            ))}

            <Grid
              container
              item
              sx={{
                justifyContent: 'space-between',
                borderTop: '1px solid #f0f0f0',
                paddingTop: '1rem',
              }}
            >
              <Grid item>
                <Typography variant='body1'>Item Price</Typography>
              </Grid>
              <Grid item>
                <Typography>${itemsPrice.toFixed(2)}</Typography>
              </Grid>
            </Grid>

            <Grid container item sx={{ justifyContent: 'space-between' }}>
              <Grid item>
                <Typography variant='body1'>Tax Price</Typography>
              </Grid>
              <Grid item>
                <Typography>${taxPrice.toFixed(2)}</Typography>
              </Grid>
            </Grid>

            <Grid container item sx={{ justifyContent: 'space-between' }}>
              <Grid item>
                <Typography variant='body1'>Shipping Price</Typography>
              </Grid>
              <Grid item>
                <Typography>${shippingPrice.toFixed(2)}</Typography>
              </Grid>
            </Grid>

            <Grid container item sx={{ justifyContent: 'space-between' }}>
              <Grid item>
                <Typography variant='subtitle2'>Total Price</Typography>
              </Grid>
              <Grid item>
                <Typography variant='subtitle2'>
                  ${totalPrice.toFixed(2)}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        )}
      </aside>
    );
  }
}

export default withStyles(styles)(Basket);
