import React, { FC } from 'react';
import { object, string } from 'yup';
import {
  Row,
  Col,

} from 'react-bootstrap';
import {
  Formik,
  Form,
} from 'formik';
import styles from './styles.module.scss';
import User from '../../types/user';
import { putUser } from '../../api/users';
import Label from '../Label';
import Input from '../Input';

const UserSettingsForm: FC = () => {
  const initialValues: User = {
    id: 1,
    firstName: '',
    lastName: '',
    userName: '',
    email: '',
    phoneNumber: '',
  };
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const validationSchema = object({
    firstName: string().min(2).max(30).required(),
    lastName: string().min(2).max(100).required(),
    phoneNumber: string().length(11).required(),
  });

  return (
    <>

      <div>
        <Formik
          initialValues={initialValues}
          onSubmit={(values) => {
            // eslint-disable-next-line no-alert
            alert(JSON.stringify(values));
          }}
          validationSchema={validationSchema}

        >

          <div className="w-full">
            <Form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">

              <Row>
                <div className="font-bold pt-4 w-full text-sm text-blue-600 ">
                  <Form>
                    <Label htmlFor="phoneNumber">Phone Number</Label>
                    <Input name="phoneNumber" id="phoneNumber" type="phoneNumber" />
                  </Form>
                </div>

              </Row>
              <Row>
                <div className="font-bold pt-4 w-full text-sm text-blue-600 ">
                  <Form>
                    <Label htmlFor="firstName">First Name</Label>
                    <Input name="firstName" id="firstName" type="firstName" />
                  </Form>
                </div>

              </Row>
              <Row>
                <div className="font-bold pt-4 w-full text-sm text-blue-600 ">
                  <Form>
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input name="lastName" id="lastName" type="lastName" />
                  </Form>
                </div>

              </Row>
              <Row>
                <div className="mt-4">
                  <Col className={styles.buttonWrapper}>
                    <button type="submit" className={styles.save}>Update Settings</button>
                  </Col>
                </div>
              </Row>
              <div className={styles.formspacer} />

            </Form>
          </div>
        </Formik>
      </div>
      <div className={styles.formspacer} />
    </>
  );
};
export default UserSettingsForm;
