import React, { Component } from 'react';
import { withStyles } from '@mui/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const styles = {
  root: {
    backgroundColor: '#F7F8FD',
    borderRadius: 5,
    padding: '1rem',
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
              <Typography key={item.id} variant='body1'>
                {item.name}
              </Typography>
            ))
          )}
        </aside>
      </Box>
    );
  }
}

export default withStyles(styles)(Basket);
