import useSWR from 'swr';
import fetcher from '../../utils/fetcher';
import poster from '../../utils/poster';
import Login from '../../types/login';
import User from '../../types/user';

export const getUsers = () => {
  const { data, error } = useSWR('/api/User', fetcher);

  return Object.freeze({
    users: data,
    error,
  });
};

export const getUser = (id: number) => {
  const { data, error } = useSWR(`/api/User/${id}`, fetcher);

  return Object.freeze({
    user: data,
    error,
  });
};

export const postUser = (data: Login) => poster<User | null>('/api/Login', 'POST', data);
