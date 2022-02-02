import React, {
  FC,
  createContext,
  useState,
  useEffect,
} from 'react';
import User from '../../types/user';
import AuthContext from '../../types/auth-context';

export const AuthContext = createContext<AuthContext>({
  user: undefined,
  setUser: undefined,
});

export const AuthProvider:FC = ({ children }) => {
  const [user, setUser] = useState<User>(undefined);

  useEffect(() => setUser(user), [user]);

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
