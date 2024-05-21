export interface TimeStamps {
  createdAt: Date;
  updatedAt: Date;
}

export interface User {
  username: string;
  password: string;
  rol: 'user' | 'admin';
}

export interface UserJSON extends TimeStamps, User {
  id: string;
}
