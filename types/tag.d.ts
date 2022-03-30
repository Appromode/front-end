import Id from './id';

type Tag = Id & {
  createdAt: string;
  tagName: string;
};

export type TagForm = {
  tags: Tag[],
}

export interface TagPost {
  userId: string;
  tags: Tag[];
}

export interface TagSearchProps {
  tags: Tag[],
  formKey: string,
}

export default Tag;
