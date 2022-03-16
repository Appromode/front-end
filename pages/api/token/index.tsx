import { NextApiRequest, NextApiResponse } from 'next';
import cookie from 'cookie';

const handler = (req: NextApiRequest, res: NextApiResponse<string>) => {
  if (!req.headers.cookie) {
    res.status(401).send('Not authorized');
  } else {
    const { accesstoken } = cookie.parse(req.headers.cookie);
    res.status(200).send(accesstoken);
  }
};

export default handler;
