import App from 'next/app'

import { GlobalStyle } from '@/styles/globalStyles';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from '@/styles/themes/default';
  
export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <>
         <ThemeProvider theme={defaultTheme}>
            <GlobalStyle />
            <Component {...pageProps} />
        </ThemeProvider>
      </>
    );
  }
}