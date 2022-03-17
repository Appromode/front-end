import React, { FC } from 'react';
import { Container, Row } from 'react-bootstrap';
import withAuthorization from '../../utils/withAuthorization';

const Dashboard:FC = () => (
  <>
    <div className="py-20 bg-bottle text-white">
      <Container>
        <Row>
          <h1 className="text-3xl">Dashboard</h1>
        </Row>
      </Container>
    </div>
  </>
);

export default withAuthorization(Dashboard);
