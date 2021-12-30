import React, { FC } from 'react';
import {
  Col,
  Row,
} from 'react-bootstrap';
import Moment from 'moment';
import { getProjects } from '../../api/projects';
import styles from './styles.module.scss';

const ProjectForum:FC = () => {
  const { projects } = getProjects();
  const numProjects = projects.length;
  // const [threadNo, setThreadNo] = useState();

  return (
    <Col lg={{ span: 10, offset: 1 }}>
      <div id={styles.centreConsole}>
        <div id={styles.title}>Project Forum</div>
        <Row>
          <Col>
            <div id={styles.heading1}>CO600 Project Proposals</div>
          </Col>
          <Col>
            <div id={styles.subtitle}>
              Threads 1 to
              {' '}
              {numProjects}
            </div>
          </Col>
        </Row>
        <div id={styles.tableTop}>
          <Row>
            <Col xs={5} md={6}>
              <span id={styles.tableTitle}>Title</span>
            </Col>
            <Col xs={4} md={3}>
              Replies/Views
            </Col>
            <Col xs={3} md={3}>
              Last Post
            </Col>
          </Row>
        </div>
        {
              projects
                && projects.map((project :any) => {
                  if (project.deleted === false) {
                    return (
                      <div className={styles.projectIdea}>
                        <a href="/project-forum/forum-post" className={styles.navLink}>
                          <Row>
                            <Col xs={5} md={6}>
                              <div className={styles.projectTitle}>
                                {project.projectName}
                              </div>
                            </Col>
                            <Col xs={4} md={3}>
                              Replies: 1
                            </Col>
                          </Row>
                          <Row>
                            <Col xs={5} md={6}>
                              <div className={styles.projectTitle}>
                                Started by bss25 (Student),
                                {Moment(project.createdAt).format(' Do MMM YYYY HH:mm')}
                                {console.log(projects)}
                              </div>
                            </Col>
                            <Col xs={4} md={3}>
                              Views: 120
                            </Col>
                            <Col xs={3} md={3}>
                              {Moment(project.updatedAt).format('DD/MM/YYYY, HH:mm')}
                            </Col>
                          </Row>
                        </a>
                      </div>
                    );
                  }
                  return null;
                  // Message sayiing there are no project avilable
                })
          }
      </div>
    </Col>
  );
};

export default ProjectForum;
