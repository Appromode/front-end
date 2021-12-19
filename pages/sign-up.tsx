import React, { FC } from 'react';
import {
  Container,
  Row,
} from 'react-bootstrap';
import RegistrationForm from '../components/RegistrationForm';

// Schema needs to be defined for the form

export const Index: FC = () => (
  <Container>
    <Row>
      <RegistrationForm />
    </Row>
  </Container>
);

export default Index;
