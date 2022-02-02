import React, { FC, useContext } from 'react';
import { Formik, Form } from 'formik';
import { postUser } from '../../api/users';
import { AuthContext } from '../../stores/AuthContext';
import Input from '../Input';
import Label from '../Label';
import Login from '../../types/login';

const LoginForm:FC = () => {
  const { setUser } = useContext(AuthContext);

  const initialValues: Login = {
    email: '',
    password: '',
  };

  return (
    <div className="container mx-auto">
      <Formik
        initialValues={initialValues}
        onSubmit={(values, { setSubmitting, setStatus }) => {
          setSubmitting(true);
          postUser(values)
            .then((data) => setUser(data))
            .catch(() => setStatus('There was an issue, try again later'));
        }}
      >
        <>
          <h1>Login</h1>
          <Form>
            <div className="my-3">
              <Label htmlFor="email">Email</Label>
              <Input name="email" id="email" type="email" placeholder="example@kent.ac.uk" />
            </div>
            <div className="my-3">
              <Label htmlFor="password">Password</Label>
              <Input name="password" id="password" type="password" placeholder="Password123" />
            </div>
            <button type="submit" className="px-3 py-2 upper bg-emerald-600 text-white rounded">Login</button>
          </Form>
        </>
      </Formik>
    </div>
  );
};
export default LoginForm;
