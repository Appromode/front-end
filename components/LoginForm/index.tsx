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
  Field,
} from 'formik';
import styles from './styles.module.scss';
import { postUser } from '../../api/users';

const LoginForm:FC = () => (
  <>
    <div className={styles.formspacer} />
    <div className={styles.centreConsole}>
      <p id={styles.title1}>Account Login</p>
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        onSubmit={(values) => postUser(values)}
      >
        <div className={styles.textbox}>
          <Form>
            <Row>
              <Col lg={{ span: 10, offset: 1 }}>
                <FormGroup controlId="email">
                  <FormLabel>Kent Email</FormLabel>
                  <Field name="email" type="email" placeholder="example@kent.ac.uk" as={FormControl} />
                </FormGroup>
              </Col>
            </Row>
            <div className={styles.formspacer} />
            <Row>
              <Col lg={{ span: 10, offset: 1 }}>
                <FormGroup controlId="password">
                  <FormLabel>Password</FormLabel>
                  <Field name="password" type="password" placeholder="Password" as={FormControl} />
                </FormGroup>
              </Col>
            </Row>
            <div className={styles.formspacer} />
            <div className={styles.formspacer} />
            <Row>
              <Col className={styles.buttonWrapper}>
                <button type="submit" className={styles.save}>Login</button>
              </Col>
            </Row>
          </Form>
        </div>
      </Formik>
    </div>
    <div className={styles.formspacer} />
  </>
);

export default LoginForm;
