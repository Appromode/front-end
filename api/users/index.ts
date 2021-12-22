import useSWR from 'swr';
import fetcher from '../../utils/fetcher';

export const getUsers = () => {
  const { data, error } = useSWR('/api/User', fetcher);

  return Object.freeze({
    users: data,
    error,
  });
};

export const getUser = ({ id }: { id: number }) => {
  const { data, error } = useSWR(`/api/User/${id}`, fetcher);

  return Object.freeze({
    user: data,
    error,
  });
};
