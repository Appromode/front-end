import { UserDTO } from './user';
import Tag from './tag';

type Group = {
  senderId: string;
  groupName: string;
  groupDescription: string;
  groupMembers: UserDTO[];
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
  groupUsers: UserDTO[]
  isClosed: false
  updatedAt: string
  updatedBy: null
}

export default Group;
