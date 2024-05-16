import { Request, Response } from 'express';
import userModel from '../models/usersModel';

export const getUser = (req: Request, res: Response) => {
  userModel
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.status(500).json({ error: (error as Error).message }));
};

export const createUser = (req: Request, res: Response) => {
  const { username, password } = req.body;

  userModel
    .create({ username, password })
    .then((data) => res.json(data))
    .catch((error) => res.status(500).json({ error: (error as Error).message }));
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
