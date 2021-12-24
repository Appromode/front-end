import React from 'react';
import {
  Col,
  Row,
} from 'react-bootstrap';
import styles from './styles.module.scss';

export const ProjectForum = () => (
  <Col lg={{ span: 10, offset: 1 }}>
    <div id={styles.centreConsole}>
      <div id={styles.title}>Project Forum</div>
      <Row>
        <Col>
          <div id={styles.heading1}>CO600 Project Proposals</div>
        </Col>
        <Col>
          <div id={styles.subtitle}>Threads 1 to 1</div>
        </Col>
      </Row>
      <div id={styles.tableTop}>
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
      <div className={styles.projectIdea}>
        <Row>
          <Col xs={5} md={6}>
            <div className={styles.projectTitle}>
              CO600 System
            </div>
          </Col>
          <Col xs={4} md={3}>
            Replies: 1
          </Col>
          <Col xs={3} md={3}>
            AW85
          </Col>
        </Row>
        <Row>
          <Col xs={5} md={6}>
            <div className={styles.projectTitle}>
              Started by bss25 (Student), 18th March 2021
            </div>
          </Col>
          <Col xs={4} md={3}>
            Views: 120
          </Col>
          <Col xs={3} md={3}>
            20th March 2021 19:56
          </Col>
        </Row>
      </div>
    </div>
  </Col>
);

export default ProjectForum;
