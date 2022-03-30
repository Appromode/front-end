/* eslint-disable no-restricted-globals */
import React, {
  FC,
  useState,
  useEffect,
  useContext,
} from 'react';
import {
  Col,
  OverlayTrigger,
  Popover,
  Row,
  Tooltip,
} from 'react-bootstrap';
import {
  Formik,
  Form,
} from 'formik';
import Image from 'next/image';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import Moment from 'moment';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import { getThread, getThreadComments, patchThread } from '../../api/threads';
import { postComment, deleteComment } from '../../api/comments';
import Comment from '../../types/comment';
import AuthContext from '../../stores/AuthContext';
import styles from './styles.module.scss';

const Editor = dynamic(() => import('../Editor'), { ssr: false });

const ForumPosts: FC = () => {
  const router = useRouter();
  const [num, setNum] = useState(0);
  const [desiredCommentId, setDesiredCommentId] = useState(null);
  const [copied, setCopied] = useState(false);
  const { user } = useContext(AuthContext);
  const {
    query: { id },
  } = router;
  const [dataSent, setDataSent] = useState('');
  const handleCallback = (childData: any) => {
    setDataSent(childData);
  };
  useEffect(() => (router.isReady ? setNum(parseInt(id ? id.toString() : '1', 10)) : setNum(0)));
  const { thread } = getThread(num);
  const { threadComments } = getThreadComments(num);
  const linkValue = `http://localhost:3000/project-forum/${id}`;
  const [editorData, setEditorData] = useState([]);
  const addToPool = (userid: string, quoteText: string) => {
    setEditorData(() => [{ id: userid, quote: quoteText }]);
  };
  const handleClick = (commentText: string, commentUserId: string, commentId: number) => {
    addToPool(commentUserId, commentText);
    setDesiredCommentId(commentId);
  };
  const removeContent = (index: number) => {
    const clone = [...editorData];
    clone.splice(index, 1);
    setEditorData(clone);
  };
  const initialValues: Comment = {
    parentThreadId: num,
    quotedCommentId: desiredCommentId,
    commentText: dataSent,
    userId: user.nameid,
    canDelete: true,
  };
  return (
    <>
      <Col lg={{ span: 10, offset: 1 }}>
        <div id={styles.centreConsole}>
          {
            thread
            && thread.map((threads: any) => {
              const createMarkupDataSent = () => ({ __html: threads.threadContent });
              const renderOverlay = (props: any) => (
                <Popover id={threads.threadId} {...props}>
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
              );
              const deleteThread = () => {
                if (user.nameid === threads.userId) {
                  return (
                    <div className="mt-10">
                      <OverlayTrigger
                        placement="top"
                        delay={{ show: 250, hide: 400 }}
                        overlay={(props) => (
                          <Tooltip id="button-tooltip" {...props}>
                            Delete Post
                          </Tooltip>
                        )}
                      >
                        <button
                          type="button"
                          className={styles.deleteButton}
                          onClick={() => {
                            const patchThreadData = [{
                              value: true,
                              path: 'deleted',
                              op: 'replace',
                            }];
                            patchThread(patchThreadData, threads.threadId);
                          }}
                        >
                          <div className={styles.deleteIcon}>
                            <Image
                              src="/bin-icon.svg"
                              width={30}
                              height={30}
                              alt="Delete Post Icon"
                            />
                          </div>
                        </button>
                      </OverlayTrigger>
                    </div>
                  );
                } return (
                  <div />
                );
              };
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
                }
                return (
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
              if (!threads.deleted) {
                return (
                  <div>
                    <div key={`#thread${threads.threadId}`} id={`thread${threads.threadId}`}>
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
                                  Email
                                  {' '}
                                  {threads.user.firstName}
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
                                        overlay={renderOverlay}
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
                                <div className={styles.projDesc}>
                                  <div dangerouslySetInnerHTML={createMarkupDataSent()} />
                                </div>
                              </div>
                              {deleteThread()}
                            </div>
                          </div>
                        </div>
                      </Row>
                    </div>
                    {
              threadComments
            && threadComments.map((threadsComment :any) => (
              <div key={threadsComment.threadId}>
                {
                threadsComment.comments
                && threadsComment.comments.map((comment: any, i :number) => {
                  const userCommentEmail = comment.user.email;
                  const createMarkupCommentText = () => ({ __html: comment.commentText });
                  const deletePost = () => {
                    if (user.nameid === comment.userId) {
                      return (
                        <div className="mt-10">
                          <OverlayTrigger
                            placement="top"
                            delay={{ show: 250, hide: 400 }}
                            overlay={(props) => (
                              <Tooltip id="button-tooltip" {...props}>
                                Delete Post
                              </Tooltip>
                            )}
                          >
                            <button
                              type="button"
                              className={styles.deleteButton}
                              onClick={() => {
                                const patchCommentData = [{
                                  value: true,
                                  path: 'deleted',
                                  op: 'replace',
                                }];
                                const patchReplyData = [{
                                  value: threads.replyCount - 1,
                                  path: 'replyCount',
                                  op: 'replace',
                                }];
                                deleteComment(patchCommentData, comment.commentId);
                                if (threads.replyCount > 0) {
                                  patchThread(patchReplyData, threads.threadId);
                                } else {
                                  alert('No more posts to delete');
                                }
                              }}
                            >
                              <div className={styles.deleteIcon}>
                                <Image
                                  src="/bin-icon.svg"
                                  width={30}
                                  height={30}
                                  alt="Delete Post Icon"
                                />
                              </div>
                            </button>
                          </OverlayTrigger>
                        </div>
                      );
                    } return (
                      <div />
                    );
                  };
                  const renderCommentOverlay = (props: any) => (
                    <Popover id={comment.commentId} {...props}>
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
                  );
                  const createMarkupQuotedComment = () => (
                    { __html: comment.quotedComment.commentText }
                  );
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
                              <div dangerouslySetInnerHTML={createMarkupQuotedComment()} />
                            </div>
                            {comment.quotedComment.deleted ? (
                              <div className="italic font-bold">
                                Note: this comment has since been deleted by the user
                              </div>
                            ) : (null)}
                          </Col>
                        </Row>
                      );
                    }
                    return (null);
                  };
                  if (!comment.deleted) {
                    return (
                      <div key={`#comment${comment.commentId}`} id={`comment${comment.commentId}`}>
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
                                <a href={`mailto:${userCommentEmail}`} className={styles.link}>
                                  <div id={styles.contact}>
                                    Email
                                    {' '}
                                    {comment.user.firstName}
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
                                          onToggle={() => setCopied(false)}
                                          rootClose
                                          key={comment.commentId}
                                          overlay={renderCommentOverlay}
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
                                  <div className={styles.projDesc}>
                                    {quotedComment()}
                                    <div dangerouslySetInnerHTML={createMarkupCommentText()} />
                                  </div>
                                </div>
                                {
                                threads.threadStatus ? (
                                  <div className="mt-10">
                                    <a href="#forum-reply" className={styles.replyLink}>
                                      <button className={styles.replyButton} type="button" onClick={() => handleClick(comment.commentText, comment.user.userName, comment.commentId)}>
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
                                ) : (
                                  <div />
                                )
                              }
                                {deletePost()}
                              </div>
                            </div>
                          </div>
                        </Row>
                      </div>
                    );
                  } return (
                    <div className={styles.deletedComment}>
                      This comment, posted by
                      {' '}
                      <a href={`mailto:${comment.user.email}`}>
                        {comment.user.userName}
                      </a>
                      {' '}
                      was deleted
                    </div>
                  );
                })
                }
                {
                  threads.threadStatus ? (
                    <Row>
                      <Formik
                        initialValues={initialValues}
                        onSubmit={
                          (values) => {
                            postComment(values)
                              .then((data) => (data.map((dataThread: any) => {
                                const patchData = [{
                                  value: dataThread.parentThread.replyCount + 1,
                                  path: 'replyCount',
                                  op: 'replace',
                                }];
                                return (
                                  patchThread(patchData, num));
                              })))
                              .then(() => location.reload());
                          }
                        }
                      >
                        {({
                          setFieldValue,
                        }) => {
                          useEffect(() => {
                            setFieldValue('commentText', dataSent);
                          }, [dataSent]);
                          useEffect(() => {
                            setFieldValue('quotedCommentId', desiredCommentId);
                          }, [desiredCommentId]);
                          useEffect(() => {
                            setFieldValue('parentThreadId', num);
                          }, [num]);
                          return (
                            <Form>
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
                                      {user.given_name}
                                    </div>
                                    <div>
                                      Supervisor
                                    </div>
                                    <a href={`mailto:${user.email}`} className={styles.link}>
                                      <div id={styles.contact}>
                                        {user.email}
                                      </div>
                                    </a>
                                  </div>
                                  <div className={styles.descContainer} id="forum-reply">
                                    <div className={styles.userReply}>
                                      <Editor
                                        data={editorData}
                                        removeItem={removeContent}
                                        parentCallback={handleCallback}
                                      />
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
                            </Form>
                          );
                        }}
                      </Formik>
                    </Row>
                  ) : (
                    <div />
                  )
                }
              </div>
            ))
          }
                    {closedStatus()}
                  </div>
                );
              } return (
                <>
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
                  <div className="ml-2">
                    This project has been deleted by
                    {' '}
                    {threads.user.firstName}
                    {' '}
                    {threads.user.lastName}
                    . If this is unexpected please email Steve using
                    <a href={`mailto:${threads.user.email}`}>
                      {' '}
                      this link
                    </a>
                  </div>
                </>
              );
            })
          }
        </div>
      </Col>
    </>
  );
};

export default ForumPosts;
