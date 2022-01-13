import React, { FC } from 'react';
import {
  Col,
  Row,
} from 'react-bootstrap';
import Moment from 'moment';
import { getComments } from '../../api/comments';
import styles from './styles.module.scss';

const ProjectForum:FC = () => {
  const { comments } = getComments();

  return (
    <Col lg={{ span: 10, offset: 1 }}>
      <div id={styles.centreConsole}>
        <div id={styles.title}>Project Forum</div>
        <Row>
          <Col>
            <div id={styles.heading1}>CO600 Project Proposals</div>
          </Col>
        </Row>
        <div id={styles.tableTop}>
          <Row>
            <Col xs={5} md={6}>
              <span id={styles.tableTitle}>Title</span>
            </Col>
            <Col xs={4} md={3}>
              Replies
            </Col>
            <Col xs={3} md={3}>
              Last Post
            </Col>
          </Row>
        </div>
        {
              comments
                && comments.map((comment :any) => {
                  const parentProj = comment.comment.parentCommentId === comment.comment.commentId;
                  if ((comment.comment.deleted === false) && (parentProj)) {
                    return (
                      <div className={styles.projectIdea} key={comment.project.projectId}>
                        <a href="/project-forum/forum-post" className={styles.navLink}>
                          <Row>
                            <Col xs={5} md={6}>
                              <div className={styles.projectTitle}>
                                {comment.project.projectName}
                              </div>
                            </Col>
                          </Row>
                          <Row>
                            <Col xs={5} md={6}>
                              <div className={styles.projectTitle}>
                                Started by
                                {' '}
                                {comment.comment.userId}
                                ,
                                {Moment(comment.comment.createdAt).format(' Do MMM YYYY HH:mm')}
                              </div>
                            </Col>
                            <Col xs={4} md={3}>
                              Replies:
                              {' '}
                              {comment.comment.replies}
                            </Col>
                            <Col xs={3} md={3}>
                              {Moment(comment.comment.updatedAt).format('DD/MM/YYYY, HH:mm')}
                            </Col>
                          </Row>
                        </a>
                      </div>
                    );
                  }
                  return (
                    <div />
                  );
                })
          }
      </div>
    </Col>
  );
};

export default ProjectForum;
