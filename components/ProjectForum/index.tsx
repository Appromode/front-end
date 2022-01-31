import React, { FC, useState } from 'react';
import {
  Col,
  FormControl,
  FormGroup,
  Row,
} from 'react-bootstrap';
import Moment from 'moment';
import Image from 'next/image';
import {
  Formik,
  Form,
} from 'formik';
import { getComments } from '../../api/comments';
import styles from './styles.module.scss';
import TextEditor from '../TextEditor';

const ProjectForum:FC = () => {
  const { comments } = getComments();
  const [state, setState] = useState(false);
  const handleClick = () => {
    setState(true);
  };

  return (
    <Col lg={{ span: 10, offset: 1 }}>
      <div id={styles.centreConsole}>
        <div id={styles.title}>Project Forum</div>
        <Row>
          <Col>
            <div id={styles.headingContainer}>
              <div id={styles.heading1}>CO600 Project Proposals</div>
            </div>
          </Col>
          <Col>
            <a href="#post-thread">
              <button type="button" id={styles.replyButton} onClick={() => (handleClick())}>
                <Image
                  src="/post-icon.svg"
                  width={18}
                  height={18}
                />
                <div id={styles.buttonText}>
                  Post Thread...
                </div>
              </button>
            </a>
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
                      <div className={styles.projectIdea} key={comment.comment.commentId}>
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
                    <div key={comment.comment.commentId} />
                  );
                })
          }
        {
            state
              ? (
                <Row>
                  <Col>
                    <Formik
                      initialValues={{
                        threadTitle: '',
                        threadText: '',
                      }}
                      onSubmit={(values, actions) => {
                        console.log({ values, actions });
                        alert(JSON.stringify(values, null, 2));
                        actions.setSubmitting(false);
                      }}
                    >
                      <Form>
                        <div className={styles.descContainer} id="post-thread">
                          <div id={styles.threadTitle}>Post Thread</div>
                          <div id={styles.formPadding}>
                            <FormGroup controlId="title">
                              <FormControl type="text" placeholder="Thread title" />
                            </FormGroup>
                          </div>
                          <div className={styles.userReply}>
                            <TextEditor className="" data={[]} />
                          </div>
                          <div id={styles.buttonContainer}>
                            <button type="button" id={styles.submit}>
                              <Image
                                src="/post-icon.svg"
                                width={18}
                                height={18}
                              />
                              <div id={styles.buttonText}>
                                Post Thread...
                              </div>
                            </button>
                          </div>
                        </div>
                      </Form>
                    </Formik>
                  </Col>
                </Row>
              )
              : (<div />)
          }
      </div>
    </Col>
  );
};

export default ProjectForum;
