import React, { Component } from 'react';
import { withStyles } from '@mui/styles';
import Box from '@mui/material/Box';

const styles = {
  root: {
    backgroundColor: '#F7F8FD',
  },
};

export class Basket extends Component {
  render() {
    return <Box className={this.props.classes.root}>12132132</Box>;
  }
}

export default withStyles(styles)(Basket);
