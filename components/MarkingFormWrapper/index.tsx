import React, { FC, Children, useState } from 'react';
import {
  FormikValues,
  FormikConfig,
  Formik,
  Form,
} from 'formik';

const MarkingFormWrapper: FC<FormikConfig<FormikValues>> = ({ children, ...props }) => {
  const childrenArray = Children.toArray(children);
  const [step, setStep] = useState(0);
  const currentChild = childrenArray[step];

  const next = () => setStep(step + 1);
  const previous = () => setStep(step - 1);

  return (
    <Formik {...props}>
      <>
        <Form>{currentChild}</Form>
        <button
          type="button"
          onClick={() => previous()}
        >
          Previous
        </button>
        <button
          type="button"
          onClick={() => next()}
        >
          Next
        </button>
      </>
    </Formik>
  );
};

export default MarkingFormWrapper;
