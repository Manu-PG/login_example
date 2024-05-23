import { NextFunction, Request, Response } from 'express';

export const logger = (req: Request, res: Response, next: NextFunction) => {
  console.log(`-----------------${req.method} URL: ${req.originalUrl}-----------------`);
  if (Object.keys(req.query).length) console.log('Query', req.query);
  if (Object.keys(req.body).length) console.log('Body', req.body);
  if (Object.keys(req.params).length) console.log('Params', req.params);

  next();
};
