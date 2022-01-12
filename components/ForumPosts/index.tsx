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
                      <Col xs={9} md={4}>
                        <div className={styles.titleContainer}>
                          <div id={styles.title}>{comment.project.projectName}</div>
                        </div>
                      </Col>
                    </Row>
                    <Row>
                      <Col xs={9} md={3}>
                        <div className={styles.firstInfo}>
                          <div className={styles.infoContainer}>
                            <Image
                              src="/user.svg"
                              width={15}
                              height={15}
                              alt="User Icon"
                            />
                          </div>
                          <div className={styles.infoContainer}>
                            {comment.comment.userId}
                          </div>
                          <div className={styles.infoContainer}>
                            <Image
                              src="/clock.svg"
                              width={15}
                              height={15}
                              alt="Clock Icon"
                            />
                          </div>
                          <div className={styles.infoContainer}>
                            {Moment(comment.comment.createdAt).format(' Do MMM YYYY')}
                          </div>
                        </div>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <div className={styles.projectStatus}>
                          <Image
                            src="/unlocked.svg"
                            width={15}
                            height={15}
                            alt="Unlocked icon"
                          />
                          <div className={styles.icon}>
                            Open for further replies.
                          </div>
                        </div>
                      </Col>
                    </Row>
                    <Row>
                      <Col xs={7} md={2}>
                        <div id={styles.keyInfoContainer}>
                          <Row>
                            <Col>
                              <Image
                                src="/supervisor.svg"
                                width={75}
                                height={75}
                                alt="Supervisor Icon"
                              />
                              <div id={styles.keyInfo}>
                                Supervisor
                              </div>
                            </Col>
                          </Row>
                          <Row>
                            <Col>
                              <a href="mailto:foo@bar.org.uk" id={styles.link}>
                                <div id={styles.contact}>
                                  Supervisor Email
                                </div>
                              </a>
                            </Col>
                          </Row>
                        </div>
                      </Col>
                      <Col xs={7} md={10}>
                        <div id={styles.requirements}>
                          Requirements
                        </div>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        {comment.comment.commentText}
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
