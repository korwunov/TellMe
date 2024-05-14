import express from "express";
import * as reviewController from '../controllers/reviews.controller.ts';
import { verifyToken } from '../middleware/auth.ts'
export const reviewsRouter = express.Router();

reviewsRouter.post('/', verifyToken, reviewController.addReview);

reviewsRouter.get('/', verifyToken, reviewController.getAllReviews);

export default reviewsRouter;