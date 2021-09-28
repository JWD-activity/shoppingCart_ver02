import React, { Component } from 'react';
import { withStyles } from '@mui/styles';
import Typography from '@mui/material/Typography';

const useStyles = (theme) => ({
  root: {
    color: theme.palette.text.primary,
  },
});

class Footer extends Component {
  render() {
    return (
      <footer>
        <Typography
          align='center'
          variant='body1'
          className={this.props.classes.root}
        >
          MADE WITH ❤ 2021 CODED BY {this.props.author}
        </Typography>
      </footer>
    );
  }
}

export default withStyles(useStyles)(Footer);
