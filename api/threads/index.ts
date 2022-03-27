import useSWR from 'swr';
import fetcher from '../../utils/fetcher';
import poster from '../../utils/poster';
import patcher from '../../utils/patcher';
import Thread from '../../types/thread';

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

export const patchThread = (thread: { value: string; path: string; op: string; }[], id: number) => patcher(`/api/Thread/${id}`, 'PATCH', thread);

const postThread = (thread: Thread) => poster <{ threadId: number }>('/api/Thread', 'POST', thread).then((data) => (data.threadId));

export default postThread;
