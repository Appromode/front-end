import useSWR from 'swr';
import fetcher from '../../utils/fetcher';
import poster from '../../utils/poster';
import Tag from '../../types/tag';

export const getTags = () => {
  const { data, error } = useSWR<Tag[]>('/api/Tag', fetcher);

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

export const postTag = (data: { tagName: string }) => poster('/api/Tag', 'POST', data);
