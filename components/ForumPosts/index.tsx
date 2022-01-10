import React, { FC } from 'react';
import {
  Col,
  Row,
} from 'react-bootstrap';
import { getComments } from '../../api/comments';
import styles from './styles.module.scss';

const ForumPosts:FC = () => {
  const { comments } = getComments();

  return (
    <Col lg={{ span: 10, offset: 1 }}>
      <div id={styles.centreConsole}>
        <div id={styles.title}>Project Forum</div>
        <Row>
          <Col>
            <div id={styles.heading1}>Key Info</div>
          </Col>
        </Row>
        {
          comments
          && comments.map((comment :any) => {
            if (comment.project.isClosed === false) {
              return (
                <div className={styles.projectIdea} key={comment.project.projectId}>
                  <Row>
                    <Col xs={5} md={6}>
                      <span className={styles.keyInfo}>{comment.project.projectName}</span>
                    </Col>
                    <Col xs={4} md={3}>
                      <div className={styles.keyInfo}>
                        Created by:
                        {' '}
                        {comment.comment.userId}
                      </div>
                    </Col>
                    <Col xs={3} md={3}>
                      <div className={styles.keyInfo}>
                        Project Status: Open
                      </div>
                    </Col>
                  </Row>
                </div>
              );
            }
            return (
              <div className={styles.projectIdea} key={comment.project.projectId}>
                <Row>
                  <Col xs={5} md={6}>
                    <span className={styles.keyInfo}>{comment.project.projectName}</span>
                  </Col>
                  <Col xs={4} md={3}>
                    <div className={styles.keyInfo}>
                      Created by:
                      {' '}
                      {comment.comment.userId}
                    </div>
                  </Col>
                  <Col xs={3} md={3}>
                    <div className={styles.keyInfo}>
                      Project Status: Closed
                    </div>
                  </Col>
                </Row>
              </div>
            );
          })
        }
      </div>
    </Col>
  );
};

export default ForumPosts;
