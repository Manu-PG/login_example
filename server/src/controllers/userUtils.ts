import { Response } from 'express';
import { UserDocument } from '../models/usersModel';
import jwt from 'jsonwebtoken';

export const sendAccessToken = (user: UserDocument, res: Response) => {
  const token = jwt.sign(user.toJSON(), process.env.JWT_SECRET as string, {
    expiresIn: '30m',
  });

  return res.cookie('access_token', token, { httpOnly: true, sameSite: 'strict' }).send(user);
};
