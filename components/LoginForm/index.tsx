import React, { FC, useContext } from 'react';
import { useRouter } from 'next/router';
import { Formik, Form } from 'formik';
import { object, SchemaOf, string } from 'yup';
import { postUser } from '../../api/users';
import Input from '../Input';
import Label from '../Label';
import Login from '../../types/login';
import { localPoster } from '../../utils/poster';
import UserToken from '../../types/user-token';
import { AuthContext } from '../../stores/AuthContext';

const LoginForm:FC = () => {
  const { user } = useContext(AuthContext);
  const router = useRouter();

  const initialValues: Login = {
    email: '',
    password: '',
  };

  const validationSchema: SchemaOf<Login> = object().shape({
    email: string().email().required(),
    password: string().required(),
  });

  return (
    <div className="container mx-auto">
      <Formik
        initialValues={initialValues}
        onSubmit={(values, { setSubmitting, setStatus }) => {
          setSubmitting(true);
          postUser(values)
            .then((data) => localPoster<UserToken>('/api/login', 'POST', data))
            .then(() => router.push(`/dashboard/${user.nameid}`))
            .catch(() => setStatus('There was an issue, try again later'));
        }}
        validationSchema={validationSchema}
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
