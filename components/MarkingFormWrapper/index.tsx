import React, { FC, Children, useState } from 'react';
import {
  FormikValues,
  FormikConfig,
  Formik,
  Form,
} from 'formik';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';

export interface FormikStepProps
  extends Pick<FormikConfig<FormikValues>, 'children' | 'validationSchema'> {
    label: string;
  }

export function FormikStep({ children }: FormikStepProps) {
  return <>{children}</>;
}

export const MarkingFormWrapper: FC<FormikConfig<FormikValues>> = ({ children, ...props }) => {
  const childrenArray:any = Children.toArray(children) as React.ElementType<FormikStepProps>[];
  const [step, setStep] = useState(0);
  const currentChild:any = childrenArray[step] as React.ElementType<FormikStepProps>;

  const previous = () => step > 0 && setStep(step - 1);

  function isLastStep() {
    return step === childrenArray.length - 1;
  }
  return (
    <Formik
      {...props}
      validationSchema={currentChild.props.validationSchema}
      onSubmit={async (values, helpers) => {
        if (isLastStep()) {
          await props.onSubmit(values, helpers);
        } else {
          setStep((s) => s + 1);
        }
      }}
    >
      {({ values }) => (
        <Form>
          <div className="mb-2 mt-10">
            <Stepper activeStep={step}>
              {childrenArray.map((child:any) => (
                <Step key={child.props.label}>
                  <StepLabel />
                </Step>
              ))}
            </Stepper>
          </div>
          <div>
            <div className="inline-block">
              {currentChild}
            </div>
            <div className="float-right inline-block">
              <div className="border-solid
                border-[#C4C4C4]
                p-2
                mt-2
                mb-4
                border-2
                rounded
                inline-block
                font-bold
                text-[#05345C]"
              >
                Current Mark
                <div />
                Awarded
                <div className="flex justify-center">
                  <div className="p-2
                    mt-2
                    mb-2
                    border-solid
                    border-[#C4C4C4]
                    border-2
                    flex
                    rounded
                    justify-center"
                  >
                    {((parseInt(values.taskDifficulty, 10)
                    + parseInt(values.technicalAchievements, 10)
                    + parseInt(values.technicalContributions, 10)
                    + parseInt(values.projectContributions, 10)
                    + parseInt(values.teamworkSkills, 10)
                    + parseInt(values.criticalReflection, 10)) / 6).toFixed(2)}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mb-10 w-full mt-10 justify-center items-center flex">
            {step > 0 ? (
              <button
                type="button"
                onClick={() => previous()}
                className="px-4 py-2
                rounded-md
                bg-[#373A3C]
                text-white
                border-none
                mr-6
                hover:bg-[#565a5d]"
              >
                Previous
              </button>
            ) : (
              <div className="px-9 py-2
                rounded-md
                text-white
                border-none
                mr-15"
              />
            ) }
            <button
              type="submit"
              className="px-4 py-2
              rounded-md
              bg-[#373A3C]
              text-white
              border-none
              mr-6
              hover:bg-[#565a5d]"
            >
              {isLastStep() ? 'Submit' : 'Next'}
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};
