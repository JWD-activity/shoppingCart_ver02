import React, { Component } from 'react';
import { styled } from '@mui/styles';
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Badge from '@mui/material/Badge';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

const styles = (theme) => ({
  ul: {},
});

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -7,
    top: 13,
    padding: '0 4px',
  },
}));

export class Header extends Component {
  render() {
    return (
      <AppBar position='static' color='secondary'>
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Typography variant='h6' component='h1'>
            Small Shopping Cart
          </Typography>
          <nav aria-label='main menu'>
            <List sx={{ display: 'flex' }}>
              <ListItem>
                <StyledBadge badgeContent={4} color='warning'>
                  <ShoppingCartOutlinedIcon color='white' />
                </StyledBadge>
              </ListItem>
              <ListItem>
                <ListItemText>SignIn</ListItemText>
              </ListItem>
            </List>
          </nav>
        </Toolbar>
      </AppBar>
    );
  }
}

export default Header;
