import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import RecommendedUsersTable from '../../components/RecommendedUsersTable';
import UsersTable from '../../components/UsersTable';
import withAuthorization from '../../utils/withAuthorization';

const Users = () => (
  <>
    <div className="p-20 bg-bottle text-white">
      <Container>
        <Row>
          <Col>
            <h1 className="text-3xl">Users</h1>
          </Col>
        </Row>
      </Container>
    </div>
    <div className="p-20">
      <Container>
        <Row>
          <Col>
            <h2 className="text-3xl mb-2">Recommended</h2>
            <p className="mb-5">User are recommended based on tag associativity</p>
            <RecommendedUsersTable />
          </Col>
        </Row>
      </Container>
    </div>
    <div className="p-20">
      <Container>
        <Row>
          <Col>
            <h2 className="text-3xl mb-2">All Users</h2>
            <p className="mb-5">View a users profile</p>
            <UsersTable />
          </Col>
        </Row>
      </Container>
    </div>
  </>
);

export default withAuthorization(Users);
