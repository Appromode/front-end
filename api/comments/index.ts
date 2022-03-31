import useSWR from 'swr';
import fetcher from '../../utils/fetcher';
import poster from '../../utils/poster';
import patcher from '../../utils/patcher';

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

export const deleteComment = (comment: Comment, id: number) => patcher(`/api/Comment/${id}`, 'PATCH', comment);

export const postComment = (comment: Comment) => poster <[{ parentThread: any }]>('/api/Comment', 'POST', comment).then((data) => (data));
