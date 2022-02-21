import React, { FC } from 'react';
import {
    Container,
    Row,
} from 'react-bootstrap';
import StudentDashboardForm from '../components/StudentDashboardForm';

const StudentDashboard: FC = () => (
    <Container>
        <Row>
            <StudentDashboardForm />
        </Row>
    </Container>
);

export default StudentDashboard;
