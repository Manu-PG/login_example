declare namespace Express {
  interface Request {
    user?: UserJSON;
    credentials?: {
      username: string;
      password: string;
    };
  }
}
