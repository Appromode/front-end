import React, { FC, useState, useEffect } from 'react';
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
import { getThread, getThreadComments } from '../../api/threads';
import styles from './styles.module.scss';

const Editor = dynamic(() => import('../Editor'), { ssr: false });

const ForumPosts: FC = () => {
  const router = useRouter();
  const [num, setNum] = useState(0);
  const [copied, setCopied] = useState(false);
  const {
    query: { id },
  } = router;
  useEffect(() => (router.isReady ? setNum(parseInt(id ? id.toString() : '1', 10)) : setNum(0)));
  const { thread } = getThread(num);
  const { threadComments } = getThreadComments(num);
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
            thread
              && thread.map((threads: any) => {
                const closedStatus = () => {
                  if (threads.threadStatus === true) {
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
                const userEmail = threads.user.email;
                return (
                  <div key={`#thread${threads.threadId}`}>
                    <Row>
                      <Col xs={9} md={4}>
                        <div className={styles.titleContainer}>
                          <div id={styles.title}>{threads.threadTitle}</div>
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
                            {threads.user.userName}
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
                            {Moment(threads.createdAt).format(' Do MMM YYYY')}
                          </div>
                        </div>
                      </Col>
                    </Row>
                    {closedStatus()}
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
                              {threads.user.firstName}
                              {}
                            </div>
                            <div>
                              Supervisor
                            </div>
                            <a href={`mailto:${userEmail}`} className={styles.link}>
                              <div id={styles.contact}>
                                {threads.user.email}
                              </div>
                            </a>
                          </div>
                          <div className={styles.descContainer}>
                            <div className={styles.container}>
                              <div id={styles.commentTime}>
                                <a href={`#thread${threads.threadId}`} className={styles.link}>
                                  {Moment(threads.createdAt).format(' Do MMM YYYY')}
                                </a>
                                <div id={styles.threadNo}>
                                  <div id={styles.iconPadding}>
                                    <OverlayTrigger
                                      placement="top"
                                      trigger="click"
                                      onToggle={() => setCopied(false)}
                                      rootClose
                                      key={threads.threadId}
                                      overlay={(
                                        <Popover id={threads.threadId}>
                                          <Popover.Header as="h3">Share this thread</Popover.Header>
                                          <Popover.Body>
                                            <div id={styles.shareContainer}>
                                              <CopyToClipboard
                                                text={linkValue}
                                                onCopy={() => setCopied(true)}
                                              >
                                                {
                                                  copied ? (
                                                    <div id={styles.clipboardIcon}>
                                                      <Image
                                                        src="/copied-icon.svg"
                                                        width={40}
                                                        height={40}
                                                        alt="Tick Icon"
                                                      />
                                                    </div>
                                                  ) : (
                                                    <div id={styles.clipboardIcon}>
                                                      <Image
                                                        src="/clipboard-icon.svg"
                                                        width={40}
                                                        height={40}
                                                        alt="Clipboard Icon"
                                                      />
                                                    </div>
                                                  )
                                                }
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
                                  <a href={`#thread${threads.threadId}`} className={styles.threadLink}>
                                    #Thread
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div className={styles.container}>
                              <div className={styles.projDesc} id={`thread${threads.threadId}`}>
                                {threads.threadContent}
                              </div>
                            </div>
                            <a href="#forum-reply" className={styles.replyLink}>
                              <button className={styles.replyButton} type="button" onClick={() => handleClick(threads.threadContent, threads.user.userName)}>
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
          {
            threadComments
            && threadComments.map((threads :any) => (
              <div key={threads.threadId}>
                {
                threads.comments
                && threads.comments.map((comment: any, i :number) => {
                  const userEmail = comment.user.email;
                  const quotedComment = () => {
                    if (comment.quotedCommentId !== null) {
                      return (
                        <Row className={styles.quotedText}>
                          <Col md={11}>
                            <div className={styles.userId}>
                              {comment.quotedComment.user.userName}
                              {' said: '}
                            </div>
                            <div>
                              {comment.quotedComment.commentText}
                            </div>
                          </Col>
                        </Row>
                      );
                    }
                    return (null);
                  };
                  return (
                    <div key={`#comment${comment.commentId}`}>
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
                                  <a href={`#comment${comment.commentId}`} className={styles.link}>
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
                                                  onCopy={() => setCopied(true)}
                                                >
                                                  {
                                                    copied ? (
                                                      <div id={styles.clipboardIcon}>
                                                        <Image
                                                          src="/copied-icon.svg"
                                                          width={40}
                                                          height={40}
                                                          alt="Tick Icon"
                                                        />
                                                      </div>
                                                    ) : (
                                                      <div id={styles.clipboardIcon}>
                                                        <Image
                                                          src="/clipboard-icon.svg"
                                                          width={40}
                                                          height={40}
                                                          alt="Clipboard Icon"
                                                        />
                                                      </div>
                                                    )
                                                  }
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
                                    <a href={`#comment${comment.commentId}`} className={styles.threadLink}>
                                      #Comment
                                      {' '}
                                      {i + 1}
                                    </a>
                                  </div>
                                </div>
                              </div>
                              <div className={styles.container}>
                                <div className={styles.projDesc} id={`comment${comment.commentId}`}>
                                  {quotedComment()}
                                  {comment.commentText}
                                </div>
                              </div>
                              <div className="mt-10">
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
