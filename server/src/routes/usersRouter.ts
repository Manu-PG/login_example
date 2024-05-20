import { Router } from 'express';
import { createUser, deleteUser, getUser, loginUser, logoutUser } from '../controllers/usersController';
import { isAuthenticated } from '../middlewares/authentication';

const userRouter = Router();

userRouter.post('/register', createUser);
userRouter.post('/login', loginUser);
userRouter.get('/logout', logoutUser);

userRouter.get('/me', isAuthenticated, getUser);
userRouter.delete('/remove', isAuthenticated, deleteUser);

export default userRouter;
