import React, { FC } from 'react';
import { object, number } from 'yup';
import MarkingFormWrapper from '../MarkingFormWrapper';

const MarkingForm: FC = () => {
  const initialValues = {
    taskDifficulty: 0,
    technicalAchievements: 0,
    technicalContributions: 0,
    projectContributions: 0,
    teamworkSkills: 0,
    criticalReflection: 0,
  };

  const validationSchema = object().shape({
    taskDifficulty: number().required(),
    technicalAchievements: number().required(),
    technicalContributions: number().required(),
    projectContributions: number().required(),
    teamworkSkills: number().required(),
    criticalReflection: number().required(),
  });

  return (
    <MarkingFormWrapper
      initialValues={initialValues}
      onSubmit={() => {}}
      validationSchema={validationSchema}
    >
      Marking Form
    </MarkingFormWrapper>
  );
};

export default MarkingForm;
