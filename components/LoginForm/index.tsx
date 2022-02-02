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
<<<<<<< HEAD
            <Row>
              <Col lg={{ span: 10, offset: 1 }}>
                <FormGroup controlId="email">
                  <FormLabel>Kent Email</FormLabel>
                  <Field name="email" type="email" placeholder="example@kent.ac.uk" as={FormControl} />
                </FormGroup>
              </Col>
            </Row>
            <div className={styles.formspacer} />
            <Row>
              <Col lg={{ span: 10, offset: 1 }}>
                <FormGroup controlId="password">
                  <FormLabel>Password</FormLabel>
                  <Field name="password" type="password" placeholder="password" as={FormControl} />
                </FormGroup>
              </Col>
            </Row>
            <div className={styles.formspacer} />
            <div className={styles.formspacer} />
            <Row>
              <Col className={styles.buttonWrapper}>
                <button type="submit" className={styles.save}>Login</button>
              </Col>
            </Row>
=======
            <div className="my-3">
              <Label htmlFor="email">Email</Label>
              <Input name="email" id="email" type="email" placeholder="example@kent.ac.uk" />
            </div>
            <div className="my-3">
              <Label htmlFor="password">Password</Label>
              <Input name="password" id="password" type="password" placeholder="Password123" />
            </div>
            <button type="submit" className="px-3 py-2 upper bg-emerald-600 text-white rounded">Login</button>
>>>>>>> 7d54055d1a21e1f11e1c12df3fd5969f2898911a
          </Form>
        </>
      </Formik>
    </div>
  );
};
export default LoginForm;
