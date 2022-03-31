/* eslint-disable no-restricted-globals */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, {
  FC,
  useContext,
  useState,
  useEffect,
} from 'react';
import {
  Alert,
  Col,
  OverlayTrigger,
  Row,
  Tooltip,
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
import { getProjects, patchProject } from '../../api/projects';
import ProjectSearch from '../ProjectSearch';
import RecommendedGroupsTable from '../RecommendedGroupsTable';
import styles from './styles.module.scss';
import Editor from '../Editor';
import AuthContext from '../../stores/AuthContext';

const ProjectForum:FC = () => {
  const { projects } = getProjects();
  const [state, setState] = useState(false);
  const [dataSent, setDataSent] = useState('');
  const [projectState, setProjectState] = useState(false);
  const { user } = useContext(AuthContext);
  const handleClick = () => {
    setState(true);
  };
  const initialValues: Thread = {
    threadTitle: '',
    threadContent: dataSent,
    linkedProjectId: null,
    totalMembers: '',
    threadStatus: true,
    userId: user.nameid,
    canDelete: true,
  };
  const handleCallback = (childData: any) => {
    setDataSent(childData);
  };
  const PostThreadSchema = Yup.object().shape({
    threadTitle: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('A title is required!'),
    totalMembers: Yup.string()
      .required('Please select an option')
      .nullable(true),
  });
  return (
    <Col lg={{ span: 10, offset: 1 }}>
      <div id={styles.centreConsole}>
        <div id={styles.title}>Project Forum</div>
        <Row>
          <Col md={8} xs={7}>
            <div id={styles.headingContainer}>
              Search for available projects and groups posted by students and supervisors
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
        <RecommendedGroupsTable />
        <ProjectSearch />
        {
            state
              ? (
                <Row>
                  <Col>
                    <Formik
                      initialValues={initialValues}
                      validationSchema={PostThreadSchema}
                      onSubmit={
                        (values) => {
                          postThread(values).then((data) => {
                            if (values.linkedProjectId !== null) {
                              const patchData = [{
                                value: data.toString(),
                                path: 'linkedThreadId',
                                op: 'replace',
                              }];
                              patchProject(patchData, values.linkedProjectId);
                            }
                          }).then(() => location.reload());
                        }
                      }
                    >
                      {({
                        touched,
                        errors,
                        values,
                        setFieldValue,
                      }) => {
                        useEffect(() => {
                          setFieldValue('threadContent', dataSent);
                        }, [dataSent]);
                        return (
                          <Form>
                            <div className={styles.descContainer} id="post-thread">
                              <div id={styles.threadTitle}>Post Thread</div>
                              <div className={styles.formPadding}>
                                {(touched.threadTitle && errors.threadTitle) ? <Alert>{errors.threadTitle}</Alert> : ''}
                                <Field id="threadTitle" name="threadTitle" className="w-full p-2 rounded text-lg" placeholder="Thread title" width="100%" />
                              </div>
                              <div className={styles.userReply}>
                                <Editor data={[]} removeItem={[]} parentCallback={handleCallback} />
                              </div>
                              <div className={styles.formPadding}>
                                {(touched.linkedProjectId && errors.linkedProjectId) ? <Alert>{errors.linkedProjectId}</Alert> : ''}
                              </div>
                              {projects
                                && projects.length > 0 ? (
                                  <div className={styles.formPadding} key={projects.projectId}>
                                    <div className="text-[#05345C] text-base ">
                                      <span className="mr-1">Please select a project</span>
                                      <OverlayTrigger
                                        placement="top"
                                        trigger={['hover', 'focus']}
                                        rootClose
                                        key={projects.projectId}
                                        overlay={(
                                          <Tooltip className="text-[#05345C] text-xs italic">
                                            Please leave this blank if you do not
                                            want to link this thread to a project
                                          </Tooltip>
                                        )}
                                      >
                                        <div className="inline-block">
                                          <Image
                                            src="/help-icon.svg"
                                            width={15}
                                            height={15}
                                          />
                                        </div>
                                      </OverlayTrigger>
                                    </div>
                                    <Field name="linkedProjectId" as="select" value={values.linkedProjectId}>
                                      <option value="">
                                        Please select a project
                                      </option>
                                      {
                                      projects.map((project: any) => {
                                        if (project.linkedThreadId === null) {
                                          return (
                                            <option
                                              value={project.projectId}
                                              key={project.linkedThreadId}
                                            >
                                              {project.projectName}
                                            </option>
                                          );
                                        } return (null);
                                      })
                                      }
                                    </Field>
                                  </div>
                                ) : (
                                  <div className={styles.formPadding}>
                                    No projects found, please select
                                    no on the previous question
                                  </div>
                                )}
                              <div className={styles.formPadding}>
                                <button
                                  type="button"
                                  className="border-none bg-white underline mb-1 text-blue-600 hover:text-blue-800"
                                  onClick={() => setProjectState(!projectState)}
                                >
                                  Cannot find your project?
                                </button>
                                {
                                  projectState ? (
                                    <div>
                                      Note: If you cannot find the project
                                      you are looking for, it has either not
                                      been registered or is already linked
                                      to an exisiting thread
                                    </div>
                                  ) : (
                                    <div />
                                  )
                                }
                              </div>
                              <div className={styles.formPadding}>
                                {(touched.totalMembers && errors.totalMembers) ? <Alert>{errors.totalMembers}</Alert> : ''}
                                <div className="text-[#05345C] text-base">How many members are required for this project?</div>
                                <label className={styles.formPadding}>
                                  <Field name="totalMembers" type="radio" value="0" />
                                  <span className="ml-1" />
                                  N/a
                                </label>
                                <label className={styles.formPadding}>
                                  <Field name="totalMembers" type="radio" value="2" className="ml-3" />
                                  <span className="ml-1" />
                                  2
                                </label>
                                <label className={styles.formPadding}>
                                  <Field name="totalMembers" type="radio" value="3" className="ml-3" />
                                  <span className="ml-1" />
                                  3
                                </label>
                                <label className={styles.formPadding}>
                                  <Field name="totalMembers" type="radio" value="4" className="ml-3" />
                                  <span className="ml-1" />
                                  4
                                </label>
                                <label className={styles.formPadding}>
                                  <Field name="totalMembers" type="radio" value="5" className="ml-3" />
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
                        );
                      }}
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
