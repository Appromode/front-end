import React, {
  createContext,
  FC,
  useState,
  useEffect,
} from 'react';
import { useRouter } from 'next/router';
import { decode, UserJwtPayload } from 'jsonwebtoken';
import AuthContext from '../../types/auth-context';
import Login, { LoginResponse } from '../../types/login';
import poster from '../../utils/poster';
import useHasMounted from '../../utils/useHasMounted';

const AuthContext = createContext<AuthContext>({
  user: undefined,
  login: undefined,
  logout: undefined,
});

export const AuthProvider: FC = ({ children }) => {
  const router = useRouter();
  const hasMounted = useHasMounted();
  const [user, setUser] = useState<UserJwtPayload>(undefined);

  const getUser = () => {
    const localUser = localStorage.getItem('user');

    if (!localUser) {
      setUser(undefined);
    } else {
      setUser(JSON.parse(localUser));
    }
  };

  useEffect(() => !user && getUser(), []);

  const login = async (credentials: Login) => {
    const { token } = await poster<LoginResponse>('/api/Login', 'POST', credentials);

    const tokenUser = decode(token);

    localStorage.setItem('user', JSON.stringify(tokenUser));

    setUser(tokenUser);

    poster('/api/cookie', 'POST', token, false);

    return tokenUser;
  };

  const logout = () => {
    localStorage.removeItem('user');

    poster('/api/logout', 'POST', undefined, false);

    setUser(undefined);

    router.push('/login');
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        logout,
      }}
    >
      {hasMounted && children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
