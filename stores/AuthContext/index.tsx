import React, {
  FC,
  createContext,
  useState,
  useEffect,
} from 'react';

export const AuthContext = createContext({
  user: undefined,
});

export const AuthProvider:FC = ({ children }) => {
  const [user, setUser] = useState<string>(undefined);

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
