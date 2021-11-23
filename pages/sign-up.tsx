import React, { FC } from 'react';
import {
  Container,
  Row,
} from 'react-bootstrap';
import Index1 from '../components/RegistrationForm';

// Schema needs to be defined for the form

export const SignUp: FC = () => (
  <Container>
    <Row>
      <Index1 />
    </Row>
  </Container>
);

export default SignUp;
