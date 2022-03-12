import '~/styles/globals.css';

import type { AppProps } from 'next/app';

import { index, StoreContext } from '~/store';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <StoreContext.Provider value={index}>
      <Component {...pageProps} />
    </StoreContext.Provider>
  );
}

export default MyApp;
