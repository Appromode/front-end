import React, { FC } from 'react';
import type { AppProps } from 'next/app';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.css';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const Application:FC<AppProps> = ({ Component, pageProps }) => (
  <>
    <Navigation />
    <Component {...pageProps} />
    <Footer />
  </>
);

export default Application;
