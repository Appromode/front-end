type UserToken = {
  nameid: string;
  email: string;
  jti: string;
  nbf: number;
  exp: number;
  iat: number;
};

export default UserToken;
