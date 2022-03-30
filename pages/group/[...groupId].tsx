import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import withAuthorization from '../../utils/withAuthorization';

const Group = () => (
  <>
    <Container>
      <Row>
        <Col>Group</Col>
      </Row>
    </Container>
  </>
);

export default withAuthorization(Group);
