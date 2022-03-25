import React, { FC } from 'react';
import {
  Container,
  Row,
} from 'react-bootstrap';
import StudentDashboardForm from '../../components/StudentDashboardForm';
import UserSettingsForm from '../../components/UserSettingsForm';

const StudentDashboard: FC = () => (
  <Container>
    <Row>
      <StudentDashboardForm />
      <UserSettingsForm />
    </Row>
  </Container>
);

export default StudentDashboard;
