import React, { FC } from 'react';
import Link from 'next/link';
import { Container, Row, Col } from 'react-bootstrap';

const Index:FC = () => (
  <>

    <div className="py-10 text-white bg-prussian md:py-40">
      <Container>
        <Row>
          <Col>
            <h2 className="text-4xl mb-2">Project Registry</h2>
            <p className="pb-5 text-lg">A digital system for students and supervisors</p>
            <Link href="/project-forum">
              <button
                className="bg-bottle p-3 bg-prussian-blue text-white rounded-md font-medium text-center border-1 border-brunswick"
                type="button"
              >
                View All Projects
              </button>
            </Link>
          </Col>
        </Row>
      </Container>
    </div>
    <div className="py-20 bg-white">
      <Container>
        <Row>
          <Col md={12}>
            <h2 className="text-3xl mb-4 font-medium text-prussian">Student Features</h2>
          </Col>
          <Col md={4}>
            <div className="bg-white rounded-md p-10 mb-3 sm:m-0 border-1 border-gray-300 shadow-2xl">
              <h3 className="mb-4 text-lg font-medium text-prussian">Simple Group Registration</h3>
              <img src="/home/project-registration.svg" alt="Student group registration" />
            </div>
          </Col>
          <Col md={4}>
            <div className="bg-white rounded-md p-10 mb-3 sm:m-0 border-1 border-gray-300 shadow-2xl">
              <h3 className="mb-4 text-lg font-medium text-prussian">Manage Your Profile</h3>
              <img src="/home/student-profile.svg" alt="Student profile page" />
            </div>
          </Col>
          <Col md={4}>
            <div className="bg-white rounded-md p-10 mb-3 sm:m-0 border-1 border-gray-300 shadow-2xl">
              <h3 className="mb-4 text-lg font-medium text-prussian">Find Group Members</h3>
              <img src="/home/find-students.svg" alt="Find students page" />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  </>
);

export default Index;
