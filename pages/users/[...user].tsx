import React from 'react';
import UserProfile from '../../components/UserProfile';
import withAuthorization from '../../utils/withAuthorization';

const UserView = () => (
  <UserProfile />
);

export default withAuthorization(UserView);
