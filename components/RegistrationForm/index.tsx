import React, { FC } from 'react';
import {
  Row,
  Col,
  FormControl,
  FormGroup,
  FormLabel,
} from 'react-bootstrap';
import {
  Formik,
  Form,
} from 'formik';
import Tags from '../Tags';
import styles from './styles.module.scss';

const RegistrationForm:FC = () => (
  <>
    <div className={styles.formspacer} />
    <div className={styles.centreConsole}>
      <p id={styles.title1}>Student Registration</p>
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          kentID: 0,
          email: '',
          // skills: skillslist,
        }}
        onSubmit={(values, actions) => {
          console.log({ values, actions });
          alert(JSON.stringify(values, null, 2));
          actions.setSubmitting(false);
        }}
      >
        <div className={styles.textbox}>
          <Form>
            <Row>
              <Col lg={{ span: 10, offset: 1 }}>
                <FormGroup controlId="firstname">
                  <FormLabel>First Name</FormLabel>
                  <FormControl type="text" placeholder="First Name" />
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
                  <FormControl type="email" placeholder="example@kent.ac.uk" />
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
                  <FormLabel>Add Tags</FormLabel>
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
