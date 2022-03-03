import React, { FC } from 'react';
import {
  Row,
  Col,
  FormControl,
  FormGroup,
  FormLabel,
  Image,
} from 'react-bootstrap';
import {
  Formik,
  Form,
} from 'formik';
import TagSearch from '../TagSearch';
import styles from './styles.module.scss';

const StudentDashboardForm: FC = () => (
  <>
    <div className="bg-blue-900 h-32">
      <Row>
        <div className={styles.header1}>
          <div id={styles.img}>
            <Image src="https://randomuser.me/api/portraits/men/59.jpg" width="100" roundedCircle />
          </div>
          <h1 id={styles.headertext}>CO600</h1>
          <div id={styles.studentname}>apk294@kent.ac.uk</div>
          <div id={styles.studentname}>Student Name</div>
          <div id={styles.projectname}>Project Name</div>
          <div className={styles.subtext1}>Supervised by: David Barnes</div>
        </div>
      </Row>
    </div>
    <div>
      <p id={styles.title1}>Project Status</p>
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          kentID: 0,
          email: '',
          groupTags: [],
          // skills: skillslist,
        }}
        onSubmit={(values, actions) => {
          console.log({ values, actions });
          alert(JSON.stringify(values, null, 2));
          actions.setSubmitting(false);
        }}
      >

        <div className="w-full">
          <Form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <Row>
              <div className="font-bold pt-4 w-full text-sm text-blue-600 ">
                <FormGroup controlId="mygroup">
                  <FormLabel>My CO600 Group</FormLabel>
                  <FormControl className="text-yellow-600" type="text" placeholder="My Group" readOnly />
                </FormGroup>
              </div>
            </Row>
            <div className="font-bold pt-4 w-full text-sm text-blue-600">
              <FormLabel>My Files</FormLabel>
              <FormControl type="file" multiple placeholder="Choose File" />
            </div>
            <div className="font-bold pt-4 w-full text-sm text-blue-600 ">
              <Row>
                <FormGroup>
                  <FormLabel>My Skills</FormLabel>
                  <div className="px-10" />
                  <TagSearch />
                </FormGroup>
              </Row>
            </div>
            <div className={styles.formspacer} />
          </Form>
        </div>
      </Formik>
    </div>
    <div className={styles.formspacer} />
  </>
);

export default StudentDashboardForm;
