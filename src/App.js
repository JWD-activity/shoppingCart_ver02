import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import theme from './assets/style/theme';

import Container from '@mui/material/Container';
import Header from './components/layout/Header';
import Main from './components/layout/Main';
import Footer from './components/layout/Footer';
import data from './data';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Main></Main>
      <Footer author='JINOK' />
    </ThemeProvider>
  );
}

export default App;
