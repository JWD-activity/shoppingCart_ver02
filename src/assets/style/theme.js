import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 768,
      lg: 992,
      xl: 1200,
    },
  },
  palette: {
    primary: { main: '#8959C2' },
    secondary: { main: '#1B1938' },
    warning: { main: '#ff9800', contrastText: '#1B1938' },
    text: {
      primary: '#9095A7',
      secondary: 'hsla(0, 0%, 100%, 0.6)',
    },
    background: {
      default: '#F7F8FD',
    },
  },

  typography: {
    fontFamily: "'Inter', 'sans-serif'",
    fontSize: 15,
    fontWeightRegular: 400,
    fontWeightMedium: 700,
    h1: {
      fontFamily: "'Inter', 'sans-serif'",
      fontSize: '1.3rem',
      fontWeight: 700,
    },
    h2: {
      fontSize: '1.3rem',
      fontWeight: 700,
    },
    h3: {
      fontSize: '1.3rem',
      fontWeight: 400,
    },
    h6: { fontWeight: 400 },
    body1: {
      fontSize: 15,
    },
  },
  spacing: 10,
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: 'none',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          color: '#212121',
        },
      },
    },
  },
});

export default theme;
