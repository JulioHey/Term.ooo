import React from 'react'

import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      main: "#4C4347",
      light: "#B7AEB4",
      dark: "#222",
      contrastText: "#FFFFFF"
    },
    success: {
      main: "#3aa394",
    },
    secondary: {
      main: "#d3ad69",
      contrastText: "#312a2c",
      dark: "#312B2D",
    },
    background: {
      default: "#6e5c62"
    },
    info: {
      main: "#FAFAFF"
    },
    action: {
      disabled: '#FAFAFF'
    }
  },
  typography: {
    fontFamily: `"Mitr", sans-serif`,
    fontSize: 14,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500
   },
   shadows: [
    "none",
    "none",
    "none",
    "none",
    "none",
    "none",
    "none",
    "none",
    "none",
    "none",
    "none",
    "none",
    "none",
    "none",
    "none",
    "none",
    "none",
    "none",
    "none",
    "none",
    "none",
    "none",
    "none",
    "none",
    "none",
  ],
});


const App = (props) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
        {props.children}
    </ThemeProvider>
  );
}

export default App;
