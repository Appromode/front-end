import React, { FC } from 'react';
import {
  Container,
  Row,
} from 'react-bootstrap';
import DefaultForum from '../../components/ProjectForum';

// Schema needs to be defined for the form

export const ProjectForum: FC = () => (
  <Container>
    <Row>
      <DefaultForum />
    </Row>
  </Container>
);

export default ProjectForum;
