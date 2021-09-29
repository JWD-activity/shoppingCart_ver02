import React, { Component } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import theme from './assets/style/theme';

import Container from '@mui/material/Container';
import Header from './components/layout/Header';
import Main from './components/layout/Main';
import Footer from './components/layout/Footer';
import data from './data';

const { products } = data;

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Header />
        <Main products={products}></Main>
        <Footer author='JINOK' />
      </ThemeProvider>
    );
  }
}

export default App;
