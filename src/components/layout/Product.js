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
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia component='img' alt={name} height='140' image={image} />
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
