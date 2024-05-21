import { Request, Response } from 'express';
import userModel, { UserDocument } from '../models/usersModel';
import jwt from 'jsonwebtoken';
import { UserJSON } from '../models/interfaces';

export const getUser = (req: Request, res: Response) => {
  userModel
    .findOne({ _id: res.locals.user.id })
    .then((data) => res.json(data))
    .catch((error) => res.status(500).json({ error: (error as Error).message }));
};

const getAccessToken = (user: UserDocument, res: Response) => {
  const token = jwt.sign(user.toJSON(), process.env.JWT_SECRET as string, {
    expiresIn: '30m',
  });

  res.cookie('access_token', token, { httpOnly: true }).send(user);
};

export const createUser = async (req: Request, res: Response) => {
  try {
    const { username, password } = req.body;
    const user = await userModel.create({ username, password });
    getAccessToken(user, res);
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
};

export const loginUser = async (req: Request, res: Response) => {
  try {
    const b64auth = (req.headers.authorization || '').split(' ')[1] || '';
    const [username, password] = Buffer.from(b64auth, 'base64').toString().split(':');

    const user = await userModel.findOne({ username });
    if (!user) return res.status(404).json({ error: 'User not found!' });
    if (!(await user.isValidPassword(password))) return res.status(401).json({ error: 'Incorrect Password!' });

    getAccessToken(user, res);
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
};

export const deleteUser = (req: Request, res: Response) => {
  const { id } = req.body;

  const user: UserJSON = res.locals.user;
  if (user.id !== id && user.rol !== 'admin') return res.status(401).json({ error: 'Unauthorized' });

  userModel
    .deleteOne({ _id: id })
    .then((data) => {
      if (user.id === id) logoutUser(req, res);
      else if (user.rol !== 'admin') res.json(data);
    })
    .catch((error) => res.status(500).json({ error: (error as Error).message }));
};

export const logoutUser = (req: Request, res: Response) => {
  res.clearCookie('access_token').send('logout');
};
