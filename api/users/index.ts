import useSWR from 'swr';
import User, { UserDTO } from '../../types/user';
import poster from '../../utils/poster';
import Login from '../../types/login';
import fetcher from '../../utils/fetcher';
import { Group } from '../../types/group';

export const getUsers = (userId: string) => {
  const { data, error } = useSWR<User[]>(`/api/User/${userId}/Users`, fetcher);

  return Object.freeze({
    users: data,
    error,
  });
};

export const getRecommendedUsers = (userId: string) => {
  const { data, error } = useSWR<UserDTO[]>(`/api/User/${userId}/Recommended`, fetcher);

  return Object.freeze({
    recommendedUsers: data,
    error,
  });
};

export const getRecommendedGroups = (userId: string) => {
  const { data, error } = useSWR<UserDTO[]>(`/api/User/${userId}/Recommended/Groups`, fetcher);

  return Object.freeze({
    recommendedGroups: data,
    error,
  });
};

export const getInvites = (userId: string) => {
  const key = `/api/User/${userId}/Invites`;

  const { data, error, mutate: rehydrateInvites } = useSWR<[]>(key, fetcher);

  return Object.freeze({
    key,
    rehydrateInvites,
    invites: data,
    error,
  });
};

export const acceptInvite = (inviteId: number) => (
  poster(`/api/User/${inviteId}/Invite/Accept`, 'POST', {
    inviteId,
  })
);

export const getGroup = (id: string) => {
  const key = `/api/User/${id}/Group`;

  const { data, error } = useSWR<Group[]>(key, fetcher);

  return Object.freeze({
    group: data,
    error,
  });
};

export const getUser = (id: string) => {
  const { data, error } = useSWR<UserDTO>(`/api/User/${id}`, fetcher);

  return Object.freeze({
    user: data,
    error,
  });
};

export const postUser = (data: Login) => poster<User | null>('/api/Login', 'POST', data);
