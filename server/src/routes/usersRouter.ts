import { Router } from 'express';
import { createUser, deleteUser, getUser, loginUser, logoutUser } from '../controllers/usersController';
import { isAuthenticated, setCredentials } from '../middlewares/authentication';

const userRouter = Router();

userRouter.post('/register', setCredentials, createUser);
userRouter.post('/login', setCredentials, loginUser);
userRouter.get('/logout', logoutUser);

userRouter.get('/me', isAuthenticated, getUser);
userRouter.delete('/remove', isAuthenticated, deleteUser);

export default userRouter;
