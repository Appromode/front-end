import React, { FC, useContext } from 'react';
import { Container, Row } from 'react-bootstrap';
import PasswordForm from '../../components/PasswordForm';
import PublicSettingsForm from '../../components/PublicSettingsForm';
import withAuthorization from '../../utils/withAuthorization';
import AuthContext from '../../stores/AuthContext';

const Dashboard:FC = () => {
  const { user } = useContext(AuthContext);
  return (
    <>
      <div className="py-20 bg-bottle text-white">
        <Container>
          <Row>
            <h1 className="text-3xl">Welcome,</h1>
            <h1 className="text-3xl">
              {user.given_name}
              {' '}
              {user.family_name}
            </h1>
          </Row>
        </Container>
      </div>
      <div className="py-20 bg-white">
        <Container>
          <Row>
            <PublicSettingsForm />
          </Row>
        </Container>
      </div>
      <div className="py-20 bg-white">
        <Container>
          <Row>
            <PasswordForm />
          </Row>
        </Container>
      </div>
    </>
  );
};

export default withAuthorization(Dashboard);
