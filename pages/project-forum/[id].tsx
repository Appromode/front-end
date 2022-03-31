import React, { FC } from 'react';
import {
  Container,
  Row,
} from 'react-bootstrap';
import ForumPosts from '../../components/ForumPosts';
import withAuthorization from '../../utils/withAuthorization';

const Posts: FC = () => (
  <Container>
    <Row>
      <ForumPosts />
    </Row>
  </Container>
);

export default withAuthorization(Posts);
