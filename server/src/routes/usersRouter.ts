import { Router } from 'express';
import { checkPassword, createUser, deleteUser, getUser, loginUser } from '../controllers/usersController';

const userRouter = Router();

userRouter.get('/me', getUser);
userRouter.post('/register', createUser);
userRouter.post('/login', loginUser);
userRouter.post('/verify_password', checkPassword);
userRouter.get('/logout', loginUser);
userRouter.delete('/remove', deleteUser);

export default userRouter;
