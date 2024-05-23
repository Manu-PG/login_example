import { NextFunction, Request, Response } from 'express';
import CustomError from '../errors/customError';
import { TokenError } from '../errors/errorTypes';

export const errorHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof CustomError) {
    const { statusCode, message, logging } = err;

    if (err instanceof TokenError) {
      res.clearCookie('access_token');
    }

    //if (logging)
    console.error(
      'ERROR',
      JSON.stringify(
        {
          code: err.statusCode,
          errors: err.errors,
          stack: err.stack,
        },
        null,
        2
      )
    );

    return res.status(statusCode).json({ error: message });
  }

  console.error('ERROR', err);
  return res.status(500).send({ error: 'Something went wrong' });
};
