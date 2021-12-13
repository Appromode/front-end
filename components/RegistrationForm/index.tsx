import React, { FC, useState, ChangeEvent } from 'react';
import {
  Row,
  Col,
  FormControl,
  FormGroup,
  FormLabel,
  FormSelect,
  InputGroup,
  Alert,
} from 'react-bootstrap';
import {
  Field,
  Formik,
  Form,
} from 'formik';
import { object, string } from 'yup';
import * as yup from 'yup';
import Tags from '../Tags';
import styles from './styles.module.scss';

const RegistrationForm:FC = () => {
  const [selectedRole, setSelectedRole] = useState('');

  const getRoleValue = (event: ChangeEvent<HTMLInputElement>) => {
    setSelectedRole(event.target.value);
    console.log(selectedRole);
  };

  const roles = ['Student', 'Project Supervisor', 'Module Convenor', 'Admin'];

  const roleOptions = roles.map((role) => (
    <option>
      {role}
    </option>
  ));

  const validationSchema = object({
    role: string().required('Please select a role'),
    firstName: string().min(2, 'First name is too short!').max(30, 'First name is too long!').required('First name is required'),
    lastName: string().min(2).max(30).required('Last name is Required'),
    email: string().email('Invalid email').required('Your Kent email is required'),
    password: string().required('A password is required'),
    passwordConfirm: string().required('Password cannot be confirmed if this is left blank!').oneOf([yup.ref('password'), null], 'Passwords must match'),
  });

  return (
    <>
      <div className={styles.centreConsole}>
        {/** Instead of width 40 add padding */}
        <p id={styles.title1}>Student Registration</p>
        <Formik
          enableReinitialize
          validationSchema={validationSchema}
          onSubmit={(values) => { console.log(values); }}
          initialValues={{
            role: selectedRole,
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            passwordConfirm: '',
            // skills: skillslist,
          }}
        >
          {({ touched, errors }) => (
            <div className={styles.textbox}>
              <Form>
                <Row>
                  <Col lg={{ span: 10, offset: 1 }}>
                    <FormGroup controlId="role">
                      {(touched.role && errors.role) ? <Alert>{errors.role}</Alert> : ''}
                      <FormLabel>Role</FormLabel>
                      <Field name="role" value={selectedRole} onChange={getRoleValue} as={FormSelect}>
                        <option hidden value="">Select a Role</option>
                        {roleOptions}
                      </Field>
                    </FormGroup>
                  </Col>
                </Row>
                <div className={styles.formElementWrapper}>
                  <Row>
                    <Col lg={{ span: 10, offset: 1 }}>
                      <FormGroup controlId="firstname">
                        {(touched.firstName && errors.firstName) ? <Alert>{errors.firstName}</Alert> : ''}
                        <FormLabel>First Name</FormLabel>
                        <Field name="firstName" type="text" as={FormControl} placeholder="First Name" />
                      </FormGroup>
                    </Col>
                  </Row>
                </div>
                <div className={styles.formElementWrapper}>
                  <Row>
                    <Col lg={{ span: 10, offset: 1 }}>
                      <FormGroup controlId="lastname">
                        {(touched.lastName && errors.lastName) ? <Alert>{errors.lastName}</Alert> : ''}
                        <FormLabel>Last Name</FormLabel>
                        <Field type="text" name="lastName" as={FormControl} placeholder="Last Name" />
                      </FormGroup>
                    </Col>
                  </Row>
                </div>
                <div className={styles.formElementWrapper}>
                  <Row>
                    <Col lg={{ span: 10, offset: 1 }}>
                      <FormGroup controlId="email">
                        {(touched.email && errors.email) ? <Alert>{errors.email}</Alert> : ''}
                        <FormLabel>Kent Email</FormLabel>
                        <InputGroup>
                          <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                          <Field type="email" name="email" as={FormControl} placeholder="example@kent.ac.uk" />
                        </InputGroup>
                      </FormGroup>
                    </Col>
                  </Row>
                </div>
                <div className={styles.formElementWrapper}>
                  <Row>
                    <Col lg={{ span: 10, offset: 1 }}>
                      <FormGroup controlId="password">
                        {(touched.password && errors.password) ? <Alert>{errors.password}</Alert> : ''}
                        <FormLabel>Password</FormLabel>
                        <Field type="password" name="password" as={FormControl} placeholder="Password" />
                      </FormGroup>
                    </Col>
                  </Row>
                </div>
                <div className={styles.formElementWrapper}>
                  <Row>
                    <Col lg={{ span: 10, offset: 1 }}>
                      <FormGroup controlId="passwordConfirm">
                        {(touched.passwordConfirm && errors.passwordConfirm) ? <Alert>{errors.passwordConfirm}</Alert> : ''}
                        <FormLabel>Confirm Password</FormLabel>
                        <Field type="password" name="passwordConfirm" as={FormControl} placeholder="Confirm Password" />
                      </FormGroup>
                    </Col>
                  </Row>
                </div>
                <div className={styles.formElementWrapper}>
                  <Row>
                    <Col lg={{ span: 10, offset: 1 }}>
                      <FormGroup>
                        <Tags />
                      </FormGroup>
                    </Col>
                  </Row>
                </div>
                <div className={styles.formElementWrapper}>
                  <Row>
                    <Col className={styles.buttonWrapper}>
                      <button type="submit" className={styles.save}>Create Account</button>
                    </Col>
                  </Row>
                </div>
              </Form>
            </div>
          )}
        </Formik>
      </div>
    </>
  );
};

export default RegistrationForm;
