import { NextApiRequest, NextApiResponse } from 'next';
import cookie from 'cookie';
import jwt from 'jsonwebtoken';

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  res.setHeader('Set-Cookie', cookie.serialize('token', req.body.token, {
    httpOnly: true,
    secure: false,
    maxAge: 60 * 60,
    sameSite: false,
    path: '/',
  }));

  res.status(200).send(jwt.decode(req.body.token));
};

export default handler;
