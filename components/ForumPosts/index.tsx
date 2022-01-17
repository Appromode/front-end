import React, { FC } from 'react';
import {
  Col,
  OverlayTrigger,
  FormControl,
  FormGroup,
  Popover,
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
              const editedTime = () => {
                if (comment.comment.createdAt !== comment.comment.updatedAt) {
                  return (
                    <div id={styles.lastEdited}>
                      Last Edited:
                      {' '}
                      {Moment(comment.comment.updatedAt).format(' Do MMM YYYY, HH:mm')}
                    </div>
                  );
                } return (
                  <div />
                );
              };
              if ((comment.project.isClosed === false) && (firstPost)) {
                return (
                  <div key={comment.comment.commentId}>
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
                      <div className={styles.messageContainer}>
                        <div className={styles.innerContainer} id={comment.comment.commentId}>
                          <div className={styles.keyInfoContainer}>
                            <Image
                              src="/supervisor.svg"
                              width={75}
                              height={75}
                              alt="Supervisor Icon"
                            />
                            <div id={styles.keyInfo}>
                              Name
                            </div>
                            <div>
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
                                    <OverlayTrigger
                                      placement="top"
                                      trigger="click"
                                      key={comment.comment.commentId}
                                      overlay={(
                                        <Popover id={comment.comment.commentId}>
                                          <Popover.Header as="h3">Share this thread</Popover.Header>
                                          <Popover.Body>
                                            <strong>Holy guacamole!</strong>
                                            {' '}
                                            Check this info.
                                          </Popover.Body>
                                        </Popover>
                                      )}
                                    >
                                      <div>
                                        <Image
                                          src="/share.svg"
                                          width={15}
                                          height={15}
                                          alt="Share Icon"
                                        />
                                      </div>
                                    </OverlayTrigger>
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
                            {editedTime()}
                            <div className={styles.replyButton}>
                              <Image
                                src="/reply.svg"
                                width={15}
                                height={15}
                                alt="Share Icon"
                              />
                              <div className={styles.replyText}>
                                Reply
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
                <div key={comment.comment.commentId}>
                  <Row>
                    <div className={styles.messageContainer}>
                      <div className={styles.innerContainer} id={comment.comment.commentId}>
                        <div className={styles.keyInfoContainer}>
                          <Image
                            src="/supervisor.svg"
                            width={75}
                            height={75}
                            alt="Supervisor Icon"
                          />
                          <div id={styles.keyInfo}>
                            Name
                          </div>
                          <div>
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
                                  <OverlayTrigger
                                    placement="top"
                                    trigger="click"
                                    key={comment.comment.commentId}
                                    overlay={(
                                      <Popover id={comment.comment.commentId}>
                                        <Popover.Header as="h3">Share this thread</Popover.Header>
                                        <Popover.Body>
                                          <strong>Holy guacamole!</strong>
                                          {' '}
                                          Check this info.
                                        </Popover.Body>
                                      </Popover>
                                    )}
                                  >
                                    <div>
                                      <Image
                                        src="/share.svg"
                                        width={15}
                                        height={15}
                                        alt="Share Icon"
                                      />
                                    </div>
                                  </OverlayTrigger>
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
                          {editedTime()}
                          <div className={styles.replyButton}>
                            <Image
                              src="/reply.svg"
                              width={15}
                              height={15}
                              alt="Share Icon"
                            />
                            <div className={styles.replyText}>
                              Reply
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Row>
                </div>
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
          <Row>
            <div className={styles.messageContainer}>
              <div className={styles.innerContainer}>
                <div className={styles.keyInfoContainer}>
                  <Image
                    src="/supervisor.svg"
                    width={75}
                    height={75}
                    alt="Supervisor Icon"
                  />
                  <div id={styles.keyInfo}>
                    Name
                  </div>
                  <div>
                    Supervisor
                  </div>
                  <a href="mailto:foo@bar.org.uk" className={styles.link}>
                    <div id={styles.contact}>
                      Supervisor Email
                    </div>
                  </a>
                </div>
                <div id={styles.descContainer}>
                  <div className={styles.userReply}>
                    <FormGroup controlId="reply">
                      <FormControl rows={3} as="textarea" placeholder="Write your reply..." />
                    </FormGroup>
                  </div>
                  <div>
                    <button type="submit" id={styles.postReplyButton}>
                      <Image
                        src="/reply-blue.svg"
                        width={25}
                        height={25}
                        alt="Share Icon"
                      />
                      <div className={styles.replyText}>
                        Post Reply
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </Row>
        </div>
      </Col>
    </>
  );
};

export default ForumPosts;
