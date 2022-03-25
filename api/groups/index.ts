import useSWR from 'swr';
import poster from '../../utils/poster';
import Group from '../../types/group';
import fetcher from '../../utils/fetcher';

export const postGroup = (group: Group) => poster('/api/Group', 'POST', group);

export const getGroups = () => {
  const { data, error } = useSWR('/api/Group', fetcher);

  return Object.freeze({
    groups: data,
    error,
  });
};

export const getGroup = (id :number) => {
  const { data, error } = useSWR(`/api/Group/${id}`, fetcher);

  return Object.freeze({
    group: data,
    error,
  });
};
