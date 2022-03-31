import { UserJwtPayload } from 'jsonwebtoken';
import Login from './login';

type AuthContext = {
  user: UserJwtPayload;
  login: (credentials: Login) => Promise<UserJwtPayload>;
  logout: () => void;
}

export default AuthContext;
