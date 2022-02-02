import { User } from './user';

type Group = {
  groupName: string;
  groupDescription: string;
  groupMembers: User[];
  groupTags: [];
  groupFiles: [];
};

export default Group;
