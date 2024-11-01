import { GlobalSytle } from '@/styles/globalStyles';
import App from 'next/app'
  
export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <>
        <GlobalSytle />
        <Component {...pageProps} />
      </>
    );
  }
}