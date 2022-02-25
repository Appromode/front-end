import Id from './id';

type User = Id & {
  firstName: string;
  lastName: string;
  userName: string;
  email: string;
  phoneNumber: string;
};

export default User;
