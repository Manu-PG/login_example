import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';

export const isAuthenticated = (req: Request, res: Response, next: NextFunction) => {
  try {
    const token = req.cookies.access_token;
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET as string);
    res.locals.user = decodedToken;
    next();
  } catch (error) {
    //res.clearCookie('access_token');
    return res.status(401).json({ error: (error as Error).message });
  }
};
