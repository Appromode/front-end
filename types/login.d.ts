type Login = {
  email: string;
  password: string;
};

export type LoginResponse = {
  errors: any;
  refreshToken: string;
  success: boolean;
  token: string;
};

export default Login;
