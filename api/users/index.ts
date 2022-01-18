import useSWR from 'swr';
import fetcher from '../../utils/fetcher';
import poster from '../../utils/poster';

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

export const postUser = (data: { userName: string, email: string, password: string }) => poster('/api/UserLogin', 'POST', data);
