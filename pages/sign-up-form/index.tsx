import React, { FC } from 'react';
import {
  Container,
  Row,
} from 'react-bootstrap';
import Index1 from '../../components/Forms/Reg-Form';

// Schema needs to be defined for the form

export const Index: FC = () => (
  <Container>
    <Row>
      <Index1 />
    </Row>
  </Container>
);

export default Index;
