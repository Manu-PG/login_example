import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { UserJSON } from '../config/@types/global';
import { AuthenticationHeaderError, TokenError, UserPassMissingError } from '../errors/errorTypes';

export const setCredentials = (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith('Basic ')) return next(new AuthenticationHeaderError());

  const authB64 = (authHeader || '').split(' ')[1] || '';
  const [username, password] = Buffer.from(authB64, 'base64').toString().split(':');

  console.log(`setCredentials URL:${req.originalUrl}, username: ${username}, password: ${password}, `);

  if (!username || !password) return next(new UserPassMissingError());

  req.credentials = { username, password };

  next();
};

export const isAuthenticated = (req: Request, res: Response, next: NextFunction) => {
  try {
    const token = req.cookies.access_token;
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET as string);
    req.user = decodedToken as UserJSON;

    console.log(`isAuthenticated URL:${req.originalUrl}, user: ${JSON.stringify(decodedToken)}`);

    next();
  } catch (error) {
    next(new TokenError({ error: error as Error }));
  }
};
