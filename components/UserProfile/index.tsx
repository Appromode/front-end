import React, { FC } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { getUser } from '../../api/users';

const UserProfile: FC = () => {
  const { user } = getUser('');

  return (
    <div className="p-20 bg-bottle text-white">
      <Container>
        <Row>
          <Col>
            <h1 className="text-3xl">User</h1>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default UserProfile;
