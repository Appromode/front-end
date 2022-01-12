import { User } from './user';

interface Group {
  groupName: string,
  groupDescription: string,
  groupMembers: User[],
  files: [],
}

export default Group;
