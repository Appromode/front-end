import Id from './id';

type Tag = Id & {
  createdAt: string;
  tagName: string;
};

export default Tag;
