import React, { Component } from 'react';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import { minHeight } from '@mui/system';

export class Product extends Component {
  render() {
    const { name, price, image } = this.props.product;

    return (
      <Card>
        <CardMedia
          component='img'
          alt={name}
          image={image}
          sx={{ maxWidth: 200, minHeight: 150 }}
        />
        <CardContent>
          <Typography gutterBottom variant='h5' component='div'>
            {name}
          </Typography>
          <Typography variant='body2'>${price}</Typography>
        </CardContent>
        <CardActions>
          <Button variant='contained'>Add to Cart</Button>
        </CardActions>
      </Card>
    );
  }
}

export default Product;
