import { User } from './user';

interface GroupRegistrationForm {
  groupName: string,
  groupDescription: string,
  groupMembers: User[],
  files: [],
}

export default GroupRegistrationForm;
