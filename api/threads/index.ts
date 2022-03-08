import useSWR from 'swr';
import fetcher from '../../utils/fetcher';

export const getThreads = () => {
  const { data, error } = useSWR('/api/Thread', fetcher);

  return Object.freeze({
    threads: data,
    error,
  });
};

export const getThread = (id :number) => {
  const { data, error } = useSWR(`/api/Thread/${id}`, fetcher);

  return Object.freeze({
    thread: data,
    error,
  });
};

export const getThreadComments = (id :number) => {
  const { data, error } = useSWR(`/api/Thread/${id}/comments`, fetcher);

  return Object.freeze({
    threadComments: data,
    error,
  });
};
