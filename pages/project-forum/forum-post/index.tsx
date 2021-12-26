import React, { FC } from 'react';
import {
  Container,
  Row,
} from 'react-bootstrap';
import ForumPosts from '../../../components/ForumPosts';

// Schema needs to be defined for the form

export const ForumPost: FC = () => (
  <Container>
    <Row>
      <ForumPosts />
    </Row>
  </Container>
);

export default ForumPost;
