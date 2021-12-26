import React, { FC } from 'react';
import {
  Col,
  Row,
} from 'react-bootstrap';
import styles from './styles.module.scss';

const ForumPosts:FC = () => (
  <Col lg={{ span: 10, offset: 1 }}>
    <div id={styles.centreConsole}>
      <div id={styles.title}>Project Forum</div>
      <Row>
        <Col>
          <div id={styles.heading1}>Project Title</div>
        </Col>
      </Row>
      <Row>
        <Col xs={5} md={6}>
          <span id={styles.tableTitle}>Title</span>
        </Col>
        <Col xs={4} md={3}>
          Replies/Views
        </Col>
        <Col xs={3} md={3}>
          Last Post
        </Col>
      </Row>
    </div>
  </Col>
);

export default ForumPosts;
