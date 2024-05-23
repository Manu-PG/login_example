export interface TimeStamps {
  createdAt: Date;
  updatedAt: Date;
}

export interface User {
  username: string;
  password: string;
  role: 'user' | 'admin';
}

export interface UserJSON extends TimeStamps, User {
  id: string;
}

export interface CustomError extends Error {
  type: { name: 'Token Error'; code: 401 } | { name: 'Invalid Password'; code: 401 };
}
