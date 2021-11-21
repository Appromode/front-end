import React, {
  FC,
  useMemo,
  useState,
  ChangeEvent,
} from 'react';
import {
  Formik,
  Form,
  Field,
  FieldArray,
} from 'formik';
import {
  object,
  string,
  array,
  boolean,
} from 'yup';
import {
  Container,
  Row,
  Col,
  FormGroup,
  FormLabel,
  FormControl,
  Button,
  Alert,
  FormCheck,
  Dropdown,
  ListGroupItem,
  ListGroup,
} from 'react-bootstrap';
import useFilter from '../../utils/useFilter';
import styles from './styles.module.scss';

const GroupRegistrationForm: FC = () => {
  const [groupInitiator] = useState('Yoda');
  const [findStudentInput, setFindStudentInput] = useState('');
  const [currentFile, setCurrentFile] = useState('');

  const availableStudents = useMemo(() => [
    'Boba Fett',
    'Chewbacca',
    'Chewbacca',
    'Chewbacca',
    'Obi-Wan Kenobi',
  ], []);

  const filteredStudents = useFilter(availableStudents, findStudentInput);

  const handleFindStudentInput = (event: ChangeEvent<HTMLInputElement>) => {
    setFindStudentInput(event.target.value.toLowerCase());
  };

  const handleFileUpload = (event: ChangeEvent<HTMLInputElement>) => {
    setCurrentFile(event.target.value);
  };

  return (
    <Container>
      <h2 className={styles.formHeading}>Group Registration</h2>
      <Formik
        initialValues={{
          groupName: '',
          groupDescription: '',
          groupMembers: [
            groupInitiator,
          ],
          groupFiles: [],
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
        {({ values, touched, errors }) => (
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

            <FieldArray name="groupMembers">
              {({ push, remove }) => (
                <>
                  <FormGroup controlId="findMember" className={styles.formGroup}>
                    {(touched.groupMembers && errors.groupMembers) ? <Alert>{errors.groupMembers}</Alert> : ''}
                    <FormLabel>Find Members</FormLabel>
                    <Field type="text" as={FormControl} value={findStudentInput} onChange={handleFindStudentInput} placeholder="Search..." />
                  </FormGroup>

                  <Field as={Dropdown}>
                    {
                      filteredStudents.length > 0 ? (
                        <Dropdown>
                          {
                            filteredStudents.map((student) => (
                              <>
                                <Dropdown.Item
                                  onClick={() => {
                                    push(student);
                                    setFindStudentInput('');
                                  }}
                                >
                                  {student}
                                </Dropdown.Item>
                                <Dropdown.Divider />
                              </>
                            ))
                          }
                        </Dropdown>
                      ) : ''
                    }
                  </Field>
                  {
                    values.groupMembers.length > 0 ? (
                      <>
                        <p>Members</p>
                        <ListGroup>
                          {
                            values.groupMembers.map((student, index) => (
                              <ListGroupItem onClick={() => remove(index)}>
                                {student}
                              </ListGroupItem>
                            ))
                          }
                        </ListGroup>
                      </>
                    ) : ''
                  }
                </>
              )}
            </FieldArray>

            <FieldArray name="groupFiles">
              {({ push, remove }) => (
                <>
                  <FormGroup controlId="addFiles" className={styles.formGroup}>
                    {(errors.groupFiles) ? <Alert>{errors.groupFiles}</Alert> : ''}
                    <FormLabel>Add Files</FormLabel>
                    <Row>
                      <Col lg={11}>
                        <Field type="file" as={FormControl} value={currentFile} onChange={handleFileUpload} />
                      </Col>
                      <Col>
                        <Button
                          type="button"
                          onClick={() => (
                            currentFile
                              ? (
                                push(currentFile),
                                setCurrentFile('')
                              )
                              : ''
                          )}
                        >
                          Add File
                        </Button>
                      </Col>
                    </Row>
                  </FormGroup>
                  {
                    values.groupFiles.length > 0 ? (
                      <>
                        <p>Files</p>
                        <ListGroup>
                          {
                            values.groupFiles.map((file, index) => (
                              <ListGroupItem onClick={() => remove(index)}>
                                {file}
                              </ListGroupItem>
                            ))
                          }
                        </ListGroup>
                      </>
                    ) : ''
                  }
                </>
              )}
            </FieldArray>

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
};

export default GroupRegistrationForm;
