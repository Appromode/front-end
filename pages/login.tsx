import React, { FC } from 'react';
import { Container, Row } from 'react-bootstrap';
import LoginForm from '../components/LoginForm';

const Login:FC = () => (
  <Container>
    <Row>
      <LoginForm />
    </Row>
  </Container>
);

export default Login;
