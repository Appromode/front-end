import React, { FC } from 'react';
import {
  Row,
  Col,
  FormControl,
  FormGroup,
  FormLabel,
  FormSelect,
  InputGroup,
} from 'react-bootstrap';
import {
  Formik,
  Form,
} from 'formik';
import * as Yup from 'yup';
import Tags from '../Tags';
import styles from './styles.module.scss';

const SignupSchema = Yup.object().shape({
  firstName: Yup.string().required('Required'),
  lastName: Yup.string().required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
});

const RegistrationForm:FC = () => (
  <>
    <div className={styles.formspacer} />
    <div className={styles.centreConsole}>
      <p id={styles.title1}>Student Registration</p>
      <Formik
        validationSchema={SignupSchema}
        onSubmit={console.log}
        initialValues={{
          role: '',
          firstName: '',
          lastName: '',
          kentID: 0,
          email: '',
          // skills: skillslist,
        }}
      >
        <div className={styles.textbox}>
          <Form>
            <Row>
              <Col lg={{ span: 10, offset: 1 }}>
                <FormGroup controlId="role">
                  <FormLabel>Role</FormLabel>
                  <FormSelect>
                    <option>Select a role</option>
                    <option>Student</option>
                    <option>Project Supervisor</option>
                    <option>Module Conevenor</option>
                    <option>Admin</option>
                  </FormSelect>
                </FormGroup>
              </Col>
            </Row>
            <div className={styles.formspacer} />
            <Row>
              <Col lg={{ span: 10, offset: 1 }}>
                <FormGroup controlId="firstname">
                  <FormLabel>First Name</FormLabel>
                  <FormControl name="firstName" type="text" placeholder="First Name" />
                </FormGroup>
              </Col>
            </Row>
            <div className={styles.formspacer} />
            <Row>
              <Col lg={{ span: 10, offset: 1 }}>
                <FormGroup controlId="lastname">
                  <FormLabel>Last Name</FormLabel>
                  <FormControl type="text" placeholder="Last Name" />
                </FormGroup>
              </Col>
            </Row>
            <div className={styles.formspacer} />
            <Row>
              <Col lg={{ span: 10, offset: 1 }}>
                <FormGroup controlId="kentId">
                  <FormLabel>Kent ID</FormLabel>
                  <FormControl type="text" placeholder="Kent ID" />
                </FormGroup>
              </Col>
            </Row>
            <div className={styles.formspacer} />
            <Row>
              <Col lg={{ span: 10, offset: 1 }}>
                <FormGroup controlId="email">
                  <FormLabel>Kent Email</FormLabel>
                  <InputGroup>
                    <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                    <FormControl type="email" placeholder="example@kent.ac.uk" />
                  </InputGroup>
                </FormGroup>
              </Col>
            </Row>
            <div className={styles.formspacer} />
            <Row>
              <Col lg={{ span: 10, offset: 1 }}>
                <FormGroup controlId="password">
                  <FormLabel>Password</FormLabel>
                  <FormControl type="password" placeholder="Password" />
                </FormGroup>
              </Col>
            </Row>
            <div className={styles.formspacer} />
            <Row>
              <Col lg={{ span: 10, offset: 1 }}>
                <FormGroup controlId="passwordConfirmation">
                  <FormLabel>Confirm Password</FormLabel>
                  <FormControl type="password" placeholder="Confirm Password" />
                </FormGroup>
              </Col>
            </Row>
            <div className={styles.formspacer} />
            <Row>
              <Col lg={{ span: 10, offset: 1 }}>
                <FormGroup>
                  <div className={styles.formspacer1} />
                  <Tags />
                </FormGroup>
              </Col>
            </Row>
            <div className={styles.formspacer} />
            <div className={styles.formspacer} />
            <Row>
              <Col className={styles.buttonWrapper}>
                <button type="submit" className={styles.save}>Create Account</button>
              </Col>
            </Row>
            <div className={styles.formspacer} />
          </Form>
        </div>
      </Formik>
    </div>
    <div className={styles.formspacer} />
  </>
);

export default RegistrationForm;
