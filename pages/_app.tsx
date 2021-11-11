import React, { FC } from 'react';
import type { AppProps } from 'next/app';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from '../components/Navigation';

const Application:FC<AppProps> = ({ Component, pageProps }) => (
  <>
    <Navigation />
    <Component {...pageProps} />
  </>
);

export default Application;
