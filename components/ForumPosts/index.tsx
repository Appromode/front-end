import React, { FC } from 'react';
import {
  Col,
  Row,
} from 'react-bootstrap';
import Image from 'next/image';
import Moment from 'moment';
import { getComments } from '../../api/comments';
import styles from './styles.module.scss';

const ForumPosts:FC = () => {
  const { comments } = getComments();

  return (
    <>
      <Col lg={{ span: 10, offset: 1 }}>
        <div id={styles.centreConsole}>
          {
            comments
            && comments.map((comment :any) => {
              if (comment.project.isClosed === false) {
                return (
                  <div key={comment.project.projectId}>
                    <Row>
                      <div className={styles.titleContainer}>
                        <div id={styles.title}>{comment.project.projectName}</div>
                      </div>
                    </Row>
                    <Row>
                      <Col xs={1} md={1}>
                        <div className={styles.firstInfo}>
                          {comment.comment.userId}
                        </div>
                      </Col>
                      <Col xs={2} md={2}>
                        <div className={styles.firstInfo}>
                          {Moment(comment.comment.createdAt).format(' Do MMM YYYY')}
                        </div>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <div className={styles.projectStatus}>
                          <div id={styles.icon}>
                            <Image
                              src="/unlocked.svg"
                              width={35}
                              height={35}
                            />
                          </div>
                          Open for further replies.
                        </div>
                      </Col>
                    </Row>
                    <div className={styles.projectIdea}>
                      <Row>
                        <Col xs={3} md={3}>
                          <div className={styles.infoContainer}>
                            <div className={styles.keyInfo}>{comment.project.projectName}</div>
                          </div>
                        </Col>
                        <Col xs={2} md={2}>
                          <div className={styles.infoContainer}>
                            <div className={styles.keyInfo}>
                              {comment.comment.userId}
                            </div>
                          </div>
                        </Col>
                        <Col xs={2} md={2}>
                          <div className={styles.infoContainer}>
                            <div className={styles.keyInfo}>
                              Open
                            </div>
                          </div>
                        </Col>
                      </Row>
                      <Row>
                        <Col xs={2} md={3}>
                          <div className={styles.projDesc}>Project Description</div>
                        </Col>
                      </Row>
                      <Row>
                        <Col>
                          <div>
                            {comment.comment.commentText}
                          </div>
                        </Col>
                      </Row>
                    </div>
                  </div>
                );
              }
              return (
                <div className={styles.projectIdea} key={comment.project.projectId}>
                  <Row>
                    <Col xs={3} md={3}>
                      <div className={styles.infoContainer}>
                        <div className={styles.keyInfo}>{comment.project.projectName}</div>
                      </div>
                    </Col>
                    <Col xs={2} md={2}>
                      <div className={styles.infoContainer}>
                        <div className={styles.keyInfo}>
                          {comment.comment.userId}
                        </div>
                      </div>
                    </Col>
                    <Col xs={2} md={2}>
                      <div className={styles.infoContainer}>
                        <div className={styles.keyInfo}>
                          Closed
                        </div>
                      </div>
                    </Col>
                  </Row>
                  <Row>
                    <Col xs={2} md={3}>
                      <div className={styles.projDesc}>Project Description</div>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <div>
                        {comment.comment.commentText}
                      </div>
                    </Col>
                  </Row>
                </div>
              );
            })
          }
        </div>
      </Col>
    </>
  );
};

export default ForumPosts;
