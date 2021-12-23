import useSWR from 'swr';
import fetcher from '../../utils/fetcher';

export const getTags = () => {
  const { data, error } = useSWR('/api/Tag', fetcher);

  return Object.freeze({
    tags: data,
    error,
  });
};

export const getTag = (id :number) => {
  const { data, error } = useSWR(`/api/Tag/${id}`, fetcher);

  return Object.freeze({
    tag: data,
    error,
  });
};
