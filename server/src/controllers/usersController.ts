import { NextFunction, Request, Response } from 'express';
import userModel from '../models/usersModel';
import { sendAccessToken } from './userUtils';
import { MongoServerError } from 'mongodb';
import {
  GenericUnauthorizedError,
  IncorrectPasswordError,
  UserNotFoundError,
  UsernameCollisionError,
} from '../errors/errorTypes';

export const getUser = (req: Request, res: Response, next: NextFunction) => {
  userModel
    .findOne({ _id: req.user?.id })
    .then((data) => res.json(data))
    .catch((error) => next(error));
};

export const createUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { username, password } = req.credentials ? req.credentials : { username: '', password: '' };
    const user = await userModel.create({ username, password });
    sendAccessToken(user, res);
  } catch (error) {
    if (error instanceof MongoServerError && (error as MongoServerError).code === 11000) {
      return next(new UsernameCollisionError({ error, context: { message: (error as MongoServerError).message } }));
    }
    next(error);
  }
};

export const loginUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { username, password } = req.credentials ? req.credentials : { username: '', password: '' };

    const user = await userModel.findOne({ username });
    if (!user) return next(new UserNotFoundError());
    if (!(await user.isValidPassword(password))) return next(new IncorrectPasswordError());

    sendAccessToken(user, res);
  } catch (error) {
    next(error);
  }
};

export const deleteUser = (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.body;

  const user = req.user;
  if (!user || (user.id !== id && user.role !== 'admin')) return next(new GenericUnauthorizedError());

  userModel
    .deleteOne({ _id: id })
    .then((data) => {
      if (user.id === id) logoutUser(req, res);
      else if (user.role !== 'admin') res.json(data);
    })
    .catch((error) => next(error));
};

export const logoutUser = (req: Request, res: Response) => {
  res.clearCookie('access_token').json({ message: 'logout' });
};
