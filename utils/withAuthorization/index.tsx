import React, { FC, useContext } from 'react';
import AuthContext from '../../stores/AuthContext';

const withAuthorization = (Page: FC) => () => {
  const { user } = useContext(AuthContext);

  return user ? <Page /> : <div>Error</div>;
};

export default withAuthorization;
