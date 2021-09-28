import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import theme from './assets/style/theme';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Footer from './components/Footer';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth='lg'>
        <Box>Navi</Box>
        <Footer author='JINOK' />
      </Container>
    </ThemeProvider>
  );
}

export default App;
