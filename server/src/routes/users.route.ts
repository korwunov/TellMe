import express from "express";
import * as userController from '../controllers/users.controller.ts';
import { verifyToken } from '../middleware/auth.ts'
export const usersRouter = express.Router();

usersRouter.post('/register', userController.register);

usersRouter.post('/login', userController.login);

usersRouter.get('/my', verifyToken, userController.getProfileData);

usersRouter.post('/my', verifyToken, userController.updateProfileData);

usersRouter.get('/', verifyToken, userController.getAllUsers);

export default usersRouter;