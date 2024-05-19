import express from "express";
import * as reviewController from '../controllers/reviews.controller.ts';
import { verifyToken } from '../middleware/auth.ts'
export const reviewsRouter = express.Router();

reviewsRouter.post('/', verifyToken, reviewController.addReview);

reviewsRouter.get('/', reviewController.getAllReviews);

reviewsRouter.get('/my', verifyToken, reviewController.getUsersReviews)

reviewsRouter.get('/:id', reviewController.getReviewById)

reviewsRouter.delete('/', verifyToken, reviewController.deleteReviewById);

reviewsRouter.post('/update', verifyToken, reviewController.updateReview);

export default reviewsRouter;