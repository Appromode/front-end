import React from 'react';
import GroupRegistrationForm from '../components/GroupRegistrationForm';
import withAuthorization from '../utils/withAuthorization';

const GroupRegistration = () => (
  <GroupRegistrationForm />
);

export default withAuthorization(GroupRegistration);
