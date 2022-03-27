import React, { FC } from 'react';
import { Container, Row } from 'react-bootstrap';
import InvitesTable from '../../components/InvitesTable';
import UserGroup from '../../components/UserGroup';
import withAuthorization from '../../utils/withAuthorization';

const Dashboard:FC = () => (
  <div className="divide-gray-400 divide">
    <div className="py-20 bg-bottle text-white">
      <Container>
        <Row>
          <h1 className="text-3xl">Dashboard</h1>
        </Row>
      </Container>
    </div>
    <div className="py-20">
      <Container>
        <UserGroup />
      </Container>
    </div>
    <div className="py-20">
      <Container>
        <InvitesTable />
      </Container>
    </div>
  </div>
);

export default withAuthorization(Dashboard);
