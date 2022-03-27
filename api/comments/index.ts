import useSWR from 'swr';
import fetcher from '../../utils/fetcher';
import poster from '../../utils/poster';

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

const postComment = (comment: Comment) => poster <[{ parentThread: any }]>('/api/Comment', 'POST', comment).then((data) => (data));

export default postComment;
