import useSWR from 'swr';
import fetcher from '../../utils/fetcher';

export const getTags = () => {
  const { data, error } = useSWR(`${process.env.NEXT_PUBLIC_API_ROUTE}/api/Tag`, fetcher);

  return Object.freeze({
    tags: data,
    error,
  });
};

export const getTag = ({ id }: { id: number }) => {
  const { data, error } = useSWR(`${process.env.NEXT_PUBLIC_API_ROUTE}/api/Tag/${id}`, fetcher);

  return Object.freeze({
    tag: data,
    error,
  });
};
