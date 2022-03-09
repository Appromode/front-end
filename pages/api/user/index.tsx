import { NextApiRequest, NextApiResponse } from 'next';
import jwt from 'jsonwebtoken';

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  if (req.cookies.token === undefined) {
    res.status(401).send('No auth');
  } else {
    res.status(200).json({
      userToken: jwt.decode(req.cookies.token),
    });
  }
};

export default handler;
