import React, { FC, useState } from 'react';
import {
  Col,
  OverlayTrigger,
  Popover,
  Row,
} from 'react-bootstrap';
import Image from 'next/image';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import Moment from 'moment';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import { getProjectComments } from '../../api/projects';
import styles from './styles.module.scss';

const Editor = dynamic(() => import('../Editor'), { ssr: false });

const ForumPosts: FC = () => {
  const router = useRouter();
  const {
    query: { id },
  } = router;
  const projComments = getProjectComments(id);
  const projectRetrieval = projComments.project;
  const linkValue = `http://localhost:3000/project-forum/${id}`;
  const [data, setData] = useState([]);
  const addToPool = (userid: string, quoteText: string) => {
    setData(() => [{ id: userid, quote: quoteText }]);
  };
  const handleClick = (commentText: string, commentUserId: string) => {
    addToPool(commentUserId, commentText);
  };
  const removeContent = (index: number) => {
    const clone = [...data];
    clone.splice(index, 1);
    setData(clone);
  };
  return (
    <>
      <Col lg={{ span: 10, offset: 1 }}>
        <div id={styles.centreConsole}>
          {
            projectRetrieval
            && projectRetrieval.map((project :any) => (
              <div key={project.projectId}>
                {
                  project.comments
                  && project.comments.map((comment :any, i :number) => {
                    const closedStatus = () => {
                      if (project.isClosed === false) {
                        return (
                          <>
                            <Row>
                              <Col>
                                <div className={styles.projectStatus}>
                                  <Image
                                    src="/unlocked.svg"
                                    width={20}
                                    height={20}
                                    alt="Unlocked icon"
                                  />
                                  <div className={styles.icon}>
                                    Open for further replies.
                                  </div>
                                </div>
                              </Col>
                            </Row>
                          </>
                        );
                      } return (
                        <>
                          <Row>
                            <Col>
                              <div className={styles.projectStatus}>
                                <Image
                                  src="/locked.svg"
                                  width={20}
                                  height={20}
                                  alt="Locked icon"
                                />
                                <div className={styles.icon}>
                                  Not open for further replies.
                                </div>
                              </div>
                            </Col>
                          </Row>
                        </>
                      );
                    };
                    const firstPost = () => {
                      if (comment.parentCommentId === comment.commentId) {
                        return (
                          <>
                            <Row>
                              <Col xs={9} md={4}>
                                <div className={styles.titleContainer}>
                                  <div id={styles.title}>{project.projectName}</div>
                                </div>
                              </Col>
                            </Row>
                            <Row>
                              <Col xs={9} md={5}>
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
                                    {comment.user.userName}
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
                                    {Moment(comment.createdAt).format(' Do MMM YYYY')}
                                  </div>
                                </div>
                              </Col>
                            </Row>
                            {closedStatus()}
                          </>
                        );
                      } return (
                        <>
                          <div />
                        </>
                      );
                    };
                    const userEmail = comment.user.email;
                    const editedTime = () => {
                      if (comment.createdAt !== comment.updatedAt) {
                        return (
                          <div id={styles.lastEdited}>
                            Last Edited:
                            {' '}
                            {Moment(comment.updatedAt).format(' Do MMM YYYY, HH:mm')}
                          </div>
                        );
                      } return (
                        <div />
                      );
                    };
                    return (
                      <div key={comment.commentId}>
                        {firstPost()}
                        <Row>
                          <div className={styles.messageContainer}>
                            <div className={styles.innerContainer} id={comment.commentId}>
                              <div className={styles.keyInfoContainer}>
                                <Image
                                  src="/supervisor.svg"
                                  width={75}
                                  height={75}
                                  alt="Supervisor Icon"
                                />
                                <div id={styles.keyInfo}>
                                  {comment.user.firstName}
                                  {}
                                </div>
                                <div>
                                  Supervisor
                                </div>
                                <a href={`mailto:${userEmail}`} className={styles.link}>
                                  <div id={styles.contact}>
                                    {comment.user.email}
                                  </div>
                                </a>
                              </div>
                              <div className={styles.descContainer}>
                                <div className={styles.container}>
                                  <div id={styles.commentTime}>
                                    <a href={`#${comment.commentId}`} className={styles.link}>
                                      {Moment(comment.createdAt).format(' Do MMM YYYY')}
                                    </a>
                                    <div id={styles.threadNo}>
                                      <div id={styles.iconPadding}>
                                        <OverlayTrigger
                                          placement="top"
                                          trigger="click"
                                          rootClose
                                          key={comment.commentId}
                                          overlay={(
                                            <Popover id={comment.commentId}>
                                              <Popover.Header as="h3">Share this thread</Popover.Header>
                                              <Popover.Body>
                                                <div id={styles.shareContainer}>
                                                  <CopyToClipboard
                                                    text={linkValue}
                                                  >
                                                    <div id={styles.clipboardIcon}>
                                                      <Image
                                                        src="/clipboard-icon.svg"
                                                        width={30}
                                                        height={30}
                                                        alt="Supervisor Icon"
                                                      />
                                                    </div>
                                                  </CopyToClipboard>
                                                  <input type="text" value={linkValue} className={styles.copyLink} readOnly />
                                                </div>
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
                                      <a href={`#${comment.commentId}`} className={styles.threadLink}>
                                        #
                                        {i + 1}
                                      </a>
                                    </div>
                                  </div>
                                </div>
                                <div className={styles.container}>
                                  <div className={styles.projDesc} id={`comment${comment.commentId}`}>
                                    {comment.commentText}
                                  </div>
                                </div>
                                {editedTime()}
                                <a href="#forum-reply" className={styles.replyLink}>
                                  <button className={styles.replyButton} type="button" onClick={() => handleClick(comment.commentText, comment.user.userName)}>
                                    <Image
                                      src="/reply.svg"
                                      width={15}
                                      height={15}
                                      alt="Reply Icon"
                                    />
                                    <div className={styles.replyText}>
                                      Reply
                                    </div>
                                  </button>
                                </a>
                              </div>
                            </div>
                          </div>
                        </Row>
                      </div>
                    );
                  })
                }
              </div>
            ))
          }
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
                <div className={styles.descContainer} id="forum-reply">
                  <div className={styles.userReply}>
                    <Editor data={data} removeItem={removeContent} />
                  </div>
                  <div id={styles.buttonContainer}>
                    <button type="submit" id={styles.postReplyButton}>
                      <Image
                        src="/post-reply.svg"
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
