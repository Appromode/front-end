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
          <Col lg={6}>
            <span id={styles.tableTitle}>Title</span>
          </Col>
          <Col>
            Replies/Views
          </Col>
          <Col>
            Last Post
          </Col>
        </Row>
      </div>
      <div className={styles.projectIdea}>
        <Row>
          <Col lg={6}>
            CO600 System
          </Col>
          <Col>
            Replies: 1
          </Col>
          <Col>
            AW85
          </Col>
        </Row>
        <Row>
          <Col lg={6}>
            Started by bss25 (Student), 18th March 2021
          </Col>
          <Col>
            Views: 120
          </Col>
          <Col>
            20th March 2021 19:56
          </Col>
        </Row>
      </div>
    </div>
  </Col>
);

export default ProjectForum;
