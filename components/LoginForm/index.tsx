import React, { FC, useContext } from 'react';
import { object, SchemaOf, string } from 'yup';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { Formik, Form } from 'formik';
import { Col, Container, Row, Spinner } from 'react-bootstrap';
import Input from '../Input';
import Label from '../Label';
import Login from '../../types/login';
import AuthContext from '../../stores/AuthContext';

const LoginForm:FC = () => {
  const router = useRouter();
  const { login } = useContext(AuthContext);

  const initialValues: Login = {
    email: '',
    password: '',
  };

  const validationSchema: SchemaOf<Login> = object().shape({
    email: string().email().required(),
    password: string().required(),
  });

  return (
    <>
      <div className="container mx-auto">
        <Formik
          initialValues={initialValues}
          onSubmit={(values, { setSubmitting, setErrors }) => {
            setSubmitting(true);
            login(values)
              .then((data) => router.push(`/dashboard/${data.nameid}`))
              .catch(() => {
                setErrors({
                  email: 'Incorrect email or password',
                  password: 'Incorrect email or password',
                });
              })
              .finally(() => {
                setSubmitting(false);
              });
          }}
          validationSchema={validationSchema}
        >
          {
            ({ isSubmitting }) => (
              <>
                <div className="px-0 py-10 lg:py-64">
                  <Row>
                    <div className="flex flex-col md:flex-row justify-center items-center">
                      <Col md={4} lg={5}>
                        <div className="flex justify-center align-middle p-10 lg:p-0">
                          <Image
                            src="/login/enter.svg"
                            alt="Login"
                            width={300}
                            height={300}
                          />
                        </div>
                      </Col>
                      <Col>
                        <div className="border-1 border-gray-300 rounded-md px-4 py-5 md:p-20">
                          <h1 className="text-3xl mb-10 text-prussian font-medium">Login</h1>
                          <Form>
                            <div className="my-4">
                              <Label htmlFor="email">Email</Label>
                              <Input name="email" id="email" type="email" placeholder="example@kent.ac.uk" />
                            </div>
                            <div className="my-4">
                              <Label htmlFor="password">Password</Label>
                              <Input name="password" id="password" type="password" placeholder="Password123" />
                            </div>
                            <button
                              type="submit"
                              className="px-3 py-2.5 upper bg-bottle text-white rounded w-full"
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
                                ) : <p>Login</p>
                              }
                            </button>
                          </Form>
                        </div>
                      </Col>
                    </div>
                  </Row>
                </div>
              </>
            )
          }
        </Formik>
      </div>
    </>
  );
};

export default LoginForm;
