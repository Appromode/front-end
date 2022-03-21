import { NextApiRequest, NextApiResponse } from 'next';
import cookie from 'cookie';

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  res.setHeader('Set-Cookie', cookie.serialize('accesstoken', undefined, {
    httpOnly: true,
    expires: new Date(0),
    path: '/',
  }));

  res.status(200).send('logout');
};

export default handler;
