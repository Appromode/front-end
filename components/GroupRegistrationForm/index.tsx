import React, { FC } from 'react';
import { Formik, Form, Field } from 'formik';
import {
  object,
  string,
  array,
  boolean,
} from 'yup';
import {
  Container,
  FormGroup,
  FormLabel,
  FormControl,
  Button,
  Alert,
  FormCheck,
} from 'react-bootstrap';
import styles from './styles.module.scss';

const GroupRegistrationForm: FC = () => (
  <Container>
    <h2 className={styles.formHeading}>Group Registration</h2>
    <Formik
      initialValues={{
        groupName: '',
        groupDescription: '',
        groupMembers: [],
        files: [],
        isGroupVisible: false,
      }}
      onSubmit={() => undefined}
      validationSchema={
        object({
          groupName: string().min(5).max(30).required(),
          groupDescription: string().min(10).max(100).required(),
          groupMembers: array().min(2).max(4).required(),
          groupFiles: array(),
          isGroupVisible: boolean().required(),
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

          <FormGroup controlId="isGroupVisible" className={styles.formGroup}>
            {(touched.isGroupVisible && errors.isGroupVisible) ? <Alert>{errors.isGroupVisible}</Alert> : ''}
            <FormLabel>Group Visibility</FormLabel>
            <Field name="isGroupVisible" as={FormCheck} value={false} />
          </FormGroup>

          <Button type="submit">Create Group</Button>
        </Form>
      )}
    </Formik>
  </Container>
);

export default GroupRegistrationForm;
