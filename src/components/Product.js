import React, { Component } from 'react';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';

export class Product extends Component {
  render() {
    const { name, price, image } = this.props.product;

    return (
      <Card>
        <CardMedia
          component='img'
          alt={name}
          image={image}
          sx={{ minWidth: '100%', minHeight: 160 }}
        />
        <CardContent>
          <Typography gutterBottom variant='h2' component='div'>
            {name}
          </Typography>
          <Typography variant='h3'>${price}</Typography>
        </CardContent>
        <CardActions>
          <Button
            variant='contained'
            disableElevation
            sx={{ margin: '0 auto', width: '100%' }}
            onClick={() => {
              this.props.onAdd(this.props.product);
            }}
          >
            Add to Cart
          </Button>
        </CardActions>
      </Card>
    );
  }
}

export default Product;
