import React, { FC, useContext } from 'react';
import { useRouter } from 'next/router';
import { Formik, Form, Field } from 'formik';
import { object, string, array } from 'yup';
import {
  Container,
  FormGroup,
  FormLabel,
  FormControl,
  Alert,
} from 'react-bootstrap';
import AuthContext from '../../stores/AuthContext';
import styles from './styles.module.scss';
import UserSearch from '../UserSearch';
import postGroup from '../../api/groups';
import Group from '../../types/group';
import withAuthorization from '../../utils/withAuthorization';

const GroupRegistrationForm: FC = () => {
  const router = useRouter();
  const { user } = useContext(AuthContext);

  const initialValues: Group = {
    senderId: user.nameid,
    groupName: '',
    groupDescription: '',
    groupMembers: [],
    groupTags: [],
    groupFiles: [],
  };

  return (
    <Container>
      <h2 className={styles.formHeading}>Group Registration</h2>
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => {
          postGroup(values)
            .then(() => router.push('/dashboard'));
        }}
        validationSchema={validationSchema}
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
};

export default withAuthorization(GroupRegistrationForm);
