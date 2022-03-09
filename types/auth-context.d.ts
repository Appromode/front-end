import { Dispatch, SetStateAction } from 'react';
import UserToken from './user-token';

type AuthContext = {
  user: UserToken;
  setUser: Dispatch<SetStateAction<UserToken>>;
}

export default AuthContext;
