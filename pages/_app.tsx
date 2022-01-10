import React, { FC } from 'react';
import type { AppProps } from 'next/app';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import RegistrationForm from '../components/RegistrationForm';
import LoginForm from '../components/LoginForm';

const Application:FC<AppProps> = ({ Component, pageProps }) => (
  <>
    <Navigation />
    <Component {...pageProps} />
    <RegistrationForm />
    <LoginForm />
    <Footer />
  </>
);

export default Application;
