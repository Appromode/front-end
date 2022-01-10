import React, { FC } from 'react';
import { Formik, Form, Field } from 'formik';
import { object, string, array } from 'yup';
import {
  Container,
  FormGroup,
  FormLabel,
  FormControl,
  Alert,
} from 'react-bootstrap';
import styles from './styles.module.scss';
import UserSearch from '../UserSearch';

const GroupRegistrationForm: FC = () => (
  <Container>
    <h2 className={styles.formHeading}>Group Registration</h2>
    <Formik
      initialValues={{
        groupName: '',
        groupDescription: '',
        groupMembers: [],
        files: [],
      }}
      onSubmit={() => undefined}
      validationSchema={
        object({
          groupName: string().min(5).max(30).required(),
          groupDescription: string().min(10).max(100).required(),
          groupMembers: array().min(2).max(4).required(),
          groupFiles: array(),
        })
      }
    >
      {({ touched, errors }) => (
        <Form>
          <FormGroup controlId="groupName" className={styles.formGroup}>
            {(touched.groupName && errors.groupName) ? <Alert>{errors.groupName}</Alert> : ''}
            <FormLabel>Group Name</FormLabel>
            <Field type="text" name="groupName" as={FormControl} placeholder="Amazing group" />
          </FormGroup>

          <FormGroup controlId="groupDescription" className={styles.formGroup}>
            {(touched.groupDescription && errors.groupDescription) ? <Alert>{errors.groupDescription}</Alert> : ''}
            <FormLabel>Group Description</FormLabel>
            <Field type="text" name="groupDescription" as={FormControl} placeholder="A truly amazing group" />
          </FormGroup>

          <UserSearch />

          <button
            type="submit"
            className="p-2 bg-blue-900 text-white my-2 rounded-sm"
          >
            Create Group
          </button>
        </Form>
      )}
    </Formik>
  </Container>
);

export default GroupRegistrationForm;
