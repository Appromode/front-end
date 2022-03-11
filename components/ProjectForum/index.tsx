/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { FC, useState } from 'react';
import {
  Alert,
  Col,
  Row,
} from 'react-bootstrap';
import Image from 'next/image';
import {
  Formik,
  Field,
  Form,
} from 'formik';
import * as Yup from 'yup';
import Thread from '../../types/thread';
import postThread from '../../api/threads';
import { getProjects } from '../../api/projects';
import ProjectSearch from '../ProjectSearch';
import styles from './styles.module.scss';
import Editor from '../Editor';

const ProjectForum:FC = () => {
  const { projects } = getProjects();
  const [state, setState] = useState(false);
  const [projectLink, setProjectLink] = useState(false);
  const [checkState, setCheckState] = useState(false);
  const handleClick = () => {
    setState(true);
  };
  const linkProject = () => {
    setProjectLink(true);
  };
  const unLinkProject = () => {
    setProjectLink(false);
  };
  const initialValues: Thread = {
    threadTitle: '',
    linkProject: false,
    linkedProject: '',
    members: '',
  };
  const PostThreadSchema = Yup.object().shape({
    threadTitle: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('A title is required!'),
    linkProject: Yup.boolean()
      .required('Please select an option'),
    members: Yup.string()
      .required('Please select an option'),
    linkedProject: Yup.string().when('linkProject', {
      is: true,
      then: Yup.string().required('A project must be selected'),
    }),
  });
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
                      initialValues={initialValues}
                      validationSchema={PostThreadSchema}
                      onSubmit={(values) => { postThread(values); console.log(values); }}
                    >
                      {({ touched, errors, values }) => (
                        <Form>
                          <div className={styles.descContainer} id="post-thread">
                            <div id={styles.threadTitle}>Post Thread</div>
                            <div className={styles.formPadding}>
                              {(touched.threadTitle && errors.threadTitle) ? <Alert>{errors.threadTitle}</Alert> : ''}
                              <Field id="threadTitle" name="threadTitle" className="w-full p-2 rounded text-lg" placeholder="Thread title" width="100%" />
                            </div>
                            <div className={styles.userReply}>
                              <Editor data={[]} removeItem={[]} />
                            </div>
                            <div className={styles.formPadding}>
                              {(touched.linkProject && errors.linkProject) ? <Alert>{errors.linkProject}</Alert> : ''}
                              <div className="text-[#05345C] text-base">Would you like to link this thread to a registered project?</div>
                            </div>
                            <div className={styles.formPadding}>
                              <label>
                                <Field
                                  name="linkProject"
                                  type="radio"
                                  checked={values.linkProject}
                                  value
                                  onClick={() => {
                                    linkProject();
                                    setCheckState(false);
                                  }}
                                  className="ml-3"
                                />
                                <span className="ml-1" />
                                Yes
                              </label>
                            </div>
                            <div className={styles.formPadding}>
                              <label>
                                <Field
                                  name="linkProject"
                                  type="radio"
                                  checked={checkState}
                                  value={false}
                                  onClick={() => {
                                    unLinkProject();
                                    setCheckState(true);
                                  }}
                                  className="ml-3"
                                />
                                <span className="ml-1" />
                                No
                              </label>
                            </div>
                            <div className={styles.formPadding}>
                              {(touched.linkedProject && errors.linkedProject) ? <Alert>{errors.linkedProject}</Alert> : ''}
                            </div>
                            {
                              projectLink
                                ? (
                                  <div className={styles.formPadding}>
                                    <div>
                                      <label>
                                        {projects
                                          && projects.length > 0 ? (
                                            <>
                                              <div className="text-[#05345C] text-base">Please select a project</div>
                                              <div className="text-[#05345C] text-xs italic">
                                                Note: If you cannot find the project
                                                you are looking for, it has either not
                                                been registered or is already registered
                                                to an exisiting thread
                                              </div>
                                              <Field name="linkedProject" as="select" className="ml-3">
                                                <option value="">
                                                  Please select a project
                                                </option>
                                                {
                                                projects.map((project: any) => {
                                                  if (project.linkedThreadId === null) {
                                                    return (
                                                      <option value={project.linkedThreadId}>
                                                        {project.projectName}
                                                      </option>
                                                    );
                                                  } return (
                                                    <>
                                                    </>
                                                  );
                                                })
                                                }
                                              </Field>
                                            </>
                                          ) : (
                                            <div>
                                              No projects found, please select
                                              no on the previous question
                                            </div>
                                          )}
                                      </label>
                                    </div>
                                  </div>
                                )
                                : (<div />)
                            }
                            <div className={styles.formPadding}>
                              {(touched.members && errors.members) ? <Alert>{errors.members}</Alert> : ''}
                              <div className="text-[#05345C] text-base">How many members are required for this project?</div>
                              <label className={styles.formPadding}>
                                <Field name="members" type="radio" value="0" />
                                <span className="ml-1" />
                                N/a
                              </label>
                              <label className={styles.formPadding}>
                                <Field name="members" type="radio" value="2" className="ml-3" />
                                <span className="ml-1" />
                                2
                              </label>
                              <label className={styles.formPadding}>
                                <Field name="members" type="radio" value="3" className="ml-3" />
                                <span className="ml-1" />
                                3
                              </label>
                              <label className={styles.formPadding}>
                                <Field name="members" type="radio" value="4" className="ml-3" />
                                <span className="ml-1" />
                                4
                              </label>
                              <label className={styles.formPadding}>
                                <Field name="members" type="radio" value="5" className="ml-3" />
                                <span className="ml-1" />
                                5
                              </label>
                            </div>
                            <div id={styles.buttonContainer}>
                              <button type="submit" id={styles.submit}>
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
                      )}
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
