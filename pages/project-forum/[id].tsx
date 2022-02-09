import React, { FC } from 'react';
import {
  Container,
  Row,
} from 'react-bootstrap';
import ForumPosts from '../../components/ForumPosts';

const Posts: FC = () => (
  <Container>
    <Row>
      <ForumPosts />
    </Row>
  </Container>
);

export default Posts;
