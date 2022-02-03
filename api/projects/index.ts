import useSWR from 'swr';
import fetcher from '../../utils/fetcher';

export const getProjects = () => {
  const { data, error } = useSWR('/api/Project', fetcher);

  return Object.freeze({
    projects: data,
    error,
  });
};

export const getProject = (id :number) => {
  const { data, error } = useSWR(`/api/Project/${id}`, fetcher);

  return Object.freeze({
    project: data,
    error,
  });
};

export const getProjectComments = (id :number) => {
  const { data, error } = useSWR(`/api/Project/${id}/comments`, fetcher);

  return Object.freeze({
    project: data,
    error,
  });
};
