import React, { FC } from 'react';
import {
  Col,
  NavLink,
  Row,
} from 'react-bootstrap';
import Moment from 'moment';
import { getProjects } from '../../api/projects';
import styles from './styles.module.scss';

const ProjectForum:FC = () => {
  const { projects } = getProjects();

  return (
    <Col lg={{ span: 10, offset: 1 }}>
      <div id={styles.centreConsole}>
        <div id={styles.title}>Project Forum</div>
        <Row>
          <Col>
            <div id={styles.heading1}>CO600 Project Proposals</div>
          </Col>
          <Col>
            <div id={styles.subtitle}>Threads 1 to 1</div>
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
                      <NavLink href="/project-forum/forum-post">
                        <div className={styles.projectIdea}>
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
                        </div>
                      </NavLink>
                    );
                  }
                  return null;
                })
          }
      </div>
    </Col>
  );
};

export default ProjectForum;
