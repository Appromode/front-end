import React, { FC } from 'react';
import { Container, Row } from 'react-bootstrap';
import MarkingForm from '../../components/MarkingForm';

const MarkingSystem:FC = () => (
  <Container>
    <Row>
      <MarkingForm />
    </Row>
  </Container>
);

export default MarkingSystem;
