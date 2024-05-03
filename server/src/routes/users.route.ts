import express from "express";
import * as userController from '../controllers/users.controller.ts';
import { verifyToken } from '../middleware/auth.ts'
export const router = express.Router();

router.post('/register', userController.register)

// router.post('/login', )

router.get('/my', verifyToken, userController.getProfileData)

export default router;