import { useRouter } from 'next/router';
import React, { FC } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { getUser } from '../../api/users';

const UserProfile: FC = () => {
  const router = useRouter();

  const { user } = getUser(router.asPath.slice(7));

  return (
    <div className="p-20 bg-bottle text-white">
      <Container>
        <Row>
          <Col>
            <h1 className="text-3xl">{user?.normalizedEmail}</h1>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default UserProfile;
