import React from 'react';
import { Container, CssBaseline } from '@material-ui/core';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

import Menu from '../Menu/Menu';
import Footer from '../Footer';

const theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#ec1b2a',
    },
  },
});

const style = {
  container: {
    color: 'white',
    backgroundColor: 'black',
    flex: 1,
  },
};

function PageDefault({ children }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Menu />
      <Container style={style.container}>
        {children}
      </Container>
      <Footer />
    </ThemeProvider>
  );
}

export default PageDefault;
