import React, { FC, useState } from 'react';
import {
  Col,
  FormGroup,
  Row,
} from 'react-bootstrap';
import Image from 'next/image';
import {
  Formik,
  Field,
  Form,
} from 'formik';
import ProjectSearch from '../ProjectSearch';
import styles from './styles.module.scss';
import Editor from '../Editor';

const ProjectForum:FC = () => {
  const [state, setState] = useState(false);
  const handleClick = () => {
    setState(true);
  };

  return (
    <Col lg={{ span: 10, offset: 1 }}>
      <div id={styles.centreConsole}>
        <div id={styles.title}>Project Forum</div>
        <Row>
          <Col md={8} xs={7}>
            <div id={styles.headingContainer}>
              Search for available projects posted by students and supervisors
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
        <ProjectSearch />
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
                              <Field type="text" placeholder="Thread title" />
                            </FormGroup>
                          </div>
                          <div className={styles.userReply}>
                            <Editor data={[]} removeItem={[]} />
                          </div>
                          <div>
                            <FormGroup controlId="linkedProject">
                              <label>
                                  Would you like to link this thread to a registered project?
                              </label>
                            </FormGroup>
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
