import { JwtPayload, DecodeOptions } from 'jsonwebtoken';

declare module 'jsonwebtoken' {
  export interface UserJwtPayload extends JwtPayload {
    nameid: string;
    email: string;
    given_name: string;
    family_name: string;
  }

  export function decode(token: string, options?: DecodeOptions):
    undefined | UserJwtPayload;
}
