import React, { FC } from 'react';
import { Spinner } from 'react-bootstrap';
import {
  Formik,
  Form,
} from 'formik';
import Label from '../Label';
import Input from '../Input';

const PasswordForm: FC = () => {
  const initialValues = {
    oldPassword: '',
    newPassword: '',
    confirmNewPassword: '',
  };

  return (
    <>
      <h2 className="text-3xl mb-5">Update Password</h2>
      <Formik
        initialValues={initialValues}
        onSubmit={(values, { setSubmitting }) => {
          setSubmitting(true);
          new Promise((resolve, reject) => {
            setTimeout(reject, 2000);
          })
            .finally(() => setSubmitting(false));
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <div className="mb-4">
              <Label htmlFor="oldPassword">Old Password</Label>
              <Input name="oldPassword" id="oldPassword" type="password" />
            </div>
            <div className="mb-4">
              <Label htmlFor="newPassword">New Password</Label>
              <Input name="newPassword" id="newPassword" type="password" />
            </div>
            <div className="mb-4">
              <Label htmlFor="confirmNewPassword">Confirm New Password</Label>
              <Input name="confirmNewPassword" id="confirmNewPassword" type="password" />
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
                ) : <p>Update Password</p>
              }
            </button>
          </Form>
        )}
      </Formik>
    </>
  );
};
export default PasswordForm;
