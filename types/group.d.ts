import User from './user';
import Tag from './tag';

type Group = {
  groupName: string;
  groupDescription: string;
  groupMembers: User[];
  groupTags: Tag[];
  groupFiles: [];
};

export interface Group {
  accessRole: number;
  canDelete: false
  createdAt: string
  createdBy: null
  deleted: false
  deletedAt: null
  deletedBy: null
  groupId: number;
  groupName: string
  groupTags: null
  groupUsers: []
  isClosed: false
  updatedAt: string
  updatedBy: null
}

export default Group;
