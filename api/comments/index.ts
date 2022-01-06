import useSWR from 'swr';
import fetcher from '../../utils/fetcher';

export const getComments = () => {
  const { data, error } = useSWR('/api/Comment', fetcher);

  return Object.freeze({
    comments: data,
    error,
  });
};

export const getComment = (id :number) => {
  const { data, error } = useSWR(`/api/Comment/${id}`, fetcher);

  return Object.freeze({
    comment: data,
    error,
  });
};
