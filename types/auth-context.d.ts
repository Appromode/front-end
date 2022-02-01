import { Dispatch, SetStateAction } from 'react';
import User from './user';

type AuthContext = {
  user: User;
  setUser: Dispatch<SetStateAction<User>>;
}

export default AuthContext;
