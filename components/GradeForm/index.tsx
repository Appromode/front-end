import React, { FC } from 'react';
import {
  object,
  number,
  string,
  SchemaOf,
} from 'yup';
import { Formik, Form, Field } from 'formik';
import {
  FormGroup,
  FormLabel,
  Alert,
  FormControl,
} from 'react-bootstrap';
import Grade from '../../types/grade';
import { postGrade } from '../../api/grades';

const MarkingForm: FC = () => {
  const initialValues: Grade = {
    grade: 0,
    comment: '',
  };

  const validationSchema: SchemaOf<Grade> = object().shape({
    grade: number().min(0).max(100).required('Student grade is required'),
    comment: string(),
  });

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        postGrade(values);
      }}
    >
      {({ touched, errors }) => (
        <Form>
          <FormGroup controlId="mark">
            {(touched.grade && errors.grade) ? <Alert>{errors.grade}</Alert> : ''}
            <FormLabel>Student Mark</FormLabel>
            <Field type="number" name="grade" as={FormControl} placeholder="0" />
          </FormGroup>

          <FormGroup controlId="comment">
            {(touched.comment && errors.comment) ? <Alert>{errors.comment}</Alert> : ''}
            <FormLabel>Comments</FormLabel>
            <Field name="comment" as={() => <FormControl as="textarea" />} placeholder="0" />
          </FormGroup>
          <button
            type="submit"
          >
            Submit
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default MarkingForm;
