import React, { FC, useContext } from 'react';
import { Formik, Form } from 'formik';
import { object, array } from 'yup';
import { Container } from 'react-bootstrap';
import AuthContext from '../../stores/AuthContext';
import TagSearch from '../TagSearch';
import withAuthorization from '../../utils/withAuthorization';
import { TagForm } from '../../types/tag';
import { getAvailableTags, postUserTags } from '../../api/users';
import useMatchMutate from '../../utils/useMatchMutate';

const UserTagsForm: FC = () => {
  const { user } = useContext(AuthContext);
  const matchMutate = useMatchMutate();

  const initialValues: TagForm = {
    tags: [],
  };

  const validationSchema = object({
    tags: array().min(1),
  });

  const { availableTags } = getAvailableTags(user.nameid);

  return (
    <Container>
      <h2 className="text-2xl mb-5">Add Tags</h2>
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => {
          postUserTags({
            userId: user.nameid,
            tags: values.tags,
          }).then(() => matchMutate());
        }}
        validationSchema={validationSchema}
      >
        <Form>
          <TagSearch
            tags={availableTags}
            formKey="tags"
          />
          <button
            type="submit"
            className="p-3 bg-bottle text-white my-2 rounded-sm"
          >
            Add Tags
          </button>
        </Form>
      </Formik>
    </Container>
  );
};

export default withAuthorization(UserTagsForm);
