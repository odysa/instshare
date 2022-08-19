import '@styles/globals.css';
import type { AppProps } from 'next/app';
import { FC } from 'react';

const MyApp:FC<AppProps> = (props) => {
  const { Component, pageProps } = props;
  return <Component {...pageProps} />;
};

export default MyApp;
