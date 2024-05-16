import { Request, Response } from 'express';
import userModel from '../models/usersModel';

export const getUser = (req: Request, res: Response) => {
  userModel
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.status(500).json({ error: (error as Error).message }));
};

export const createUser = async (req: Request, res: Response) => {
  const { username, password } = req.body;
  try {
    const user = await userModel.create({ username, password });

    console.log(user);
    console.log('test', await user.isValidPassword('pass123'));
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
};

export const loginUser = (req: Request, res: Response) => {};

export const logoutUser = (req: Request, res: Response) => {};

export const checkPassword = (req: Request, res: Response) => {};

export const deleteUser = (req: Request, res: Response) => {
  const { username } = req.body;

  userModel
    .deleteOne({ username })
    .then((data) => res.json(data))
    .catch((error) => res.status(500).json({ error: (error as Error).message }));
};
