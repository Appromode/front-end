import useSWR from 'swr';
import User from '../../types/user';
import fetcher from '../../utils/fetcher';
import poster from '../../utils/poster';

export const putUser = (user: User) => poster('/api/User', 'PUT', user);

export const getUsers = () => {
  const { data, error } = useSWR('/api/User', fetcher);

  return Object.freeze<{ users: User[], error: any }>({
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
