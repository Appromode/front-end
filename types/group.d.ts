import User from './user';
import Tag from './tag';

type Group = {
  groupName: string;
  groupDescription: string;
  groupMembers: User[];
  groupTags: Tag[];
  groupFiles: [];
};

export default Group;
