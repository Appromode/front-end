import React, {
  FC,
  createContext,
  useState,
  useEffect,
} from 'react';
import UserToken from '../../types/user-token';
import AuthContext from '../../types/auth-context';

export const AuthContext = createContext<AuthContext>({
  user: undefined,
  setUser: undefined,
});

export const AuthProvider:FC = ({ children }) => {
  const [user, setUser] = useState<UserToken>(undefined);

  useEffect(() => {
    (async () => {
      const responseToken = await fetch('/api/user');
      const { userToken } = await responseToken.json();
      setUser(userToken);
    })();
  }, []);

  const value = {
    user,
    setUser,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};
