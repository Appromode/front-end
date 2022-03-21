import React, { FC, useContext } from 'react';
import { Spinner } from 'react-bootstrap';
import {
  Formik,
  Form,
} from 'formik';
import Label from '../Label';
import Input from '../Input';
import AuthContext from '../../stores/AuthContext';
import { putUser } from '../../api/users';
import User from '../../types/user';

const PublicSettingsForm: FC = () => {
  const { user } = useContext(AuthContext);

  const initialValues:User = {
    firstName: user.given_name,
    id:user.nameid,
    lastName: user.family_name,
    phoneNumber: '',
    email:'',
    userName:'',
  };
  return (
    <>
      <h2 className="text-3xl mb-5">Public Settings</h2>
      <Formik
        initialValues={initialValues}
        onSubmit={async(values, { setSubmitting }) => {
          setSubmitting(true);
          await putUser(user.nameid,values)
          setSubmitting(false)
          // new Promise((resolve, reject) => {
          //   setTimeout(reject, 2000);
          // })
          //   .finally(() => );
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <div className="mb-4">
              <Label htmlFor="firstName">First Name</Label>
              <Input name="firstName" id="firstName" type="text" value={user.given_name} />
            </div>
            <div className="mb-4">
              <Label htmlFor="lastName">Last Name</Label>
              <Input name="lastName" id="lastName" type="text" value={user.last_name} />
            </div>
            <button
              type="submit"
              className="px-3 py-2.5 upper bg-bottle text-white rounded"
              disabled={!!isSubmitting}
            >
              {
                isSubmitting ? (
                  <Spinner
                    as="span"
                    animation="border"
                    size="sm"
                    role="status"
                    aria-hidden="true"
                  />
                ) : <p>Update Settings</p>
              }
            </button>
          </Form>
        )}
      </Formik>
    </>
  );
};
export default PublicSettingsForm;
