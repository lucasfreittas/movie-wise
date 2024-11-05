import App, { AppProps } from 'next/app'

import { GlobalStyle } from '@/styles/globalStyles';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from '@/styles/themes/default';

import { useRouter } from 'next/router';
import { PagesLayout } from '@/styles/pagesLayout';
  
export default function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter(); // useRouter dentro do componente funcional
  const isLoginPage = router.pathname === '/login';

  return (
      <ThemeProvider theme={defaultTheme}>
          <GlobalStyle />
          {!isLoginPage ? (
              <PagesLayout>
                  <Component {...pageProps} />
              </PagesLayout>
          ) : (
              <Component {...pageProps} />
          )}
      </ThemeProvider>
  );
}