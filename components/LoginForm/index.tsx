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
import styles from './styles.module.scss';

const LoginForm:FC = () => (
  <>
    <div className={styles.formspacer} />
    <div className={styles.centreConsole}>
      <p id={styles.title1}>Account Login</p>
      <Formik
        initialValues={{
          kentEmail: '',
          password: '',
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
            <div className={styles.formspacer} />
          </Form>
        </div>
      </Formik>
    </div>
    <div className={styles.formspacer} />
  </>
);

export default LoginForm;
