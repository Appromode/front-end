import Id from './id';

type User = Id & {
  firstName: string;
  lastName: string;
  userName: string;
  email: string;
  phoneNumber: string;
};

export type UserDTO = {
  firstName: string;
  lastName: string;
  normalizedEmail: string;
  normalizedUserName: string;
  profilePicture: string;
  twoFactorEnabled: boolean;
  userId: string;
}

export default User;
