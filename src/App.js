import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import theme from './assets/style/theme';

import Container from '@mui/material/Container';
import Header from './components/layout/Header';
import Main from './components/layout/Main';
import Footer from './components/layout/Footer';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header></Header>
      <Container maxWidth='lg'>
        <Main></Main>
        <Footer author='JINOK' />
      </Container>
    </ThemeProvider>
  );
}

export default App;
