export interface Id {
  id: number | string;
}

export type User = Id & {
  firstName: string;
  lastName: string;
  userName: string;
  email: string;
  phoneNumber: string;
};
