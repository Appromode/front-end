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
            && comments.map((comment :any, i :number) => {
              const firstPost = comment.comment.parentCommentId === comment.comment.commentId;
              if ((comment.project.isClosed === false) && (firstPost)) {
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
                      <div className={styles.innerContainerPadding}>
                        <div className={styles.innerContainer} id={comment.comment.commentId}>
                          <div id={styles.keyInfoContainer}>
                            <Image
                              src="/supervisor.svg"
                              width={75}
                              height={75}
                              alt="Supervisor Icon"
                            />
                            <div id={styles.keyInfo}>
                              Supervisor
                            </div>
                            <a href="mailto:foo@bar.org.uk" className={styles.link}>
                              <div id={styles.contact}>
                                Supervisor Email
                              </div>
                            </a>
                          </div>
                          <div id={styles.descContainer}>
                            <div className={styles.container}>
                              <div id={styles.commentTime}>
                                <a href={`#${comment.comment.commentId}`} className={styles.link}>
                                  {Moment(comment.comment.createdAt).format(' Do MMM YYYY')}
                                </a>
                                <div id={styles.threadNo}>
                                  <div id={styles.iconPadding}>
                                    <Image
                                      src="/share.svg"
                                      width={15}
                                      height={15}
                                      alt="Share Icon"
                                    />
                                  </div>
                                  <a href={`#${comment.comment.commentId}`} className={styles.threadLink}>
                                    #
                                    {i + 1}
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div className={styles.container}>
                              <div className={styles.requirements}>
                                Requirements
                              </div>
                              <div className={styles.projDesc}>
                                {comment.comment.commentText}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Row>
                  </div>
                );
              }
              return (
                <Row>
                  <div className={styles.innerContainerPadding}>
                    <div className={styles.innerContainer} id={comment.comment.commentId}>
                      <div id={styles.keyInfoContainer}>
                        <Image
                          src="/supervisor.svg"
                          width={75}
                          height={75}
                          alt="Supervisor Icon"
                        />
                        <div id={styles.keyInfo}>
                          Supervisor
                        </div>
                        <a href="mailto:foo@bar.org.uk" className={styles.link}>
                          <div id={styles.contact}>
                            Supervisor Email
                          </div>
                        </a>
                      </div>
                      <div id={styles.descContainer}>
                        <div className={styles.container}>
                          <div id={styles.commentTime}>
                            <a href={`#${comment.comment.commentId}`} className={styles.link}>
                              {Moment(comment.comment.createdAt).format(' Do MMM YYYY')}
                            </a>
                            <div id={styles.threadNo}>
                              <div id={styles.iconPadding}>
                                <Image
                                  src="/share.svg"
                                  width={15}
                                  height={15}
                                  alt="Share Icon"
                                />
                              </div>
                              <a href={`#${comment.comment.commentId}`} className={styles.threadLink}>
                                #
                                {i + 1}
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className={styles.container}>
                          <div className={styles.requirements}>
                            Requirements
                          </div>
                          <div className={styles.projDesc}>
                            {comment.comment.commentText}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Row>
              );
            })
          }
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
        </div>
      </Col>
    </>
  );
};

export default ForumPosts;
