import { NextApiRequest, NextApiResponse } from 'next';
import cookie from 'cookie';
import { UserJwtPayload } from 'jsonwebtoken';

const handler = (req: NextApiRequest, res: NextApiResponse<string | UserJwtPayload>) => {
  res.setHeader('Set-Cookie', cookie.serialize('accesstoken', req.body, {
    httpOnly: true,
    secure: true,
    maxAge: 60 * 60,
    path: '/',
    sameSite: 'none',
  }));

  res.status(200).json('cookie');
};

export default handler;
