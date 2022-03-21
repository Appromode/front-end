import useSWR from 'swr';
import User from '../../types/user';
import fetcher from '../../utils/fetcher';
import poster from '../../utils/poster';
import Login from '../../types/login';

export const getUsers = () => {
  const { data, error } = useSWR<User[]>('/api/User', fetcher);

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

export const putUser = (id:string, user: User) => poster('/api/User', 'PUT', { id, user });
