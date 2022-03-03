import React, { FC } from 'react';
import { object, string } from 'yup';
import {
  Row,
  Col,
  FormControl,
  FormGroup,
  FormLabel,
  Alert,
} from 'react-bootstrap';
import {
  Formik,
  Form,
} from 'formik';
import styles from './styles.module.scss';
import User from '../../types/user';
import { putUser } from '../../api/users';

const UserSettingsForm: FC = () => {
  const initialValues: User = {
    id: 1,
    firstName: '',
    lastName: '',
    userName: '',
    email: '',
    phoneNumber: '',
  };
  const validationSchema = object({
    firstName: string().min(5).max(30).required(),
    lastName: string().min(10).max(100).required(),
    password: string().min(8).max(30).required(),
    phoneNumber: string().length(11).required(),
  });

  return (
    <>

      <div>
        <Formik
          initialValues={initialValues}
          onSubmit={(values) => {
            console.log('values : ', values);
            putUser(values);
          }}
          validationSchema={validationSchema}

        >
          {({ touched, errors }) => (

            <div className="w-full">
              <Form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">

                <Row>
                  <div className="font-bold pt-4 w-full text-sm text-blue-600 ">
                    <FormGroup controlId="phoneNumber">
                      {(touched.phoneNumber && errors.phoneNumber) ? <Alert>{errors.phoneNumber}</Alert> : ''}
                      <FormLabel>Phone Number</FormLabel>
                      <FormControl type="text" placeholder="XXXXXXXX" name="phoneNumber" />
                    </FormGroup>
                  </div>

                </Row>
                <Row>
                  <div className="font-bold pt-4 w-full text-sm text-blue-600 ">
                    <FormGroup controlId="firstName">
                      {(touched.firstName && errors.firstName) ? <Alert>{errors.firstName}</Alert> : ''}
                      <FormLabel>First Name</FormLabel>
                      <FormControl type="text" placeholder="First Name" name="firstName" />
                    </FormGroup>
                  </div>

                </Row>
                <Row>
                  <div className="font-bold pt-4 w-full text-sm text-blue-600 ">
                    <FormGroup controlId="lastName">
                      {(touched.lastName && errors.lastName) ? <Alert>{errors.lastName}</Alert> : ''}
                      <FormLabel>Last Name</FormLabel>
                      <FormControl type="text" placeholder="Last Name" name="lastName" />
                    </FormGroup>
                  </div>

                </Row>
                <Row>
                  <div className="font-bold pt-4 w-full text-sm text-blue-600 ">
                    <FormGroup controlId="password">
                      {(touched.password && errors.password) ? <Alert>{errors.password}</Alert> : ''}
                      <FormLabel>Password</FormLabel>
                      <FormControl type="password" placeholder="Password" name="password" />
                    </FormGroup>
                  </div>

                </Row>
                <Row>
                  <Col className={styles.buttonWrapper}>
                    <button type="submit" className={styles.save}>Update Settings</button>
                  </Col>
                </Row>
                <div className={styles.formspacer} />

              </Form>
            </div>
          )}
        </Formik>
      </div>
      <div className={styles.formspacer} />
    </>
  );
};
export default UserSettingsForm;
