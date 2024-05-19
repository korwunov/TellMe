import { Request, Response } from 'express';
import * as reviewService from "../services/reviews.service.ts"

export async function addReview(req: any, res: Response) {
    try {
        await reviewService.addReview(req, res);
    }
    catch(err) {
        console.error('error while request processing');
        console.log(err.message);
    }
}

export async function getAllReviews(req: any, res: Response) {
    try {
        res.status(200).json(await reviewService.getAllReviews());
    }
    catch(err) {
        console.error('error while request processing');
        console.log(err.message);
    }
}

export async function getReviewById(req: any, res: Response) {
    try {
        res.status(200).json(await reviewService.getReviewById(req.path.substring(1, req.path.length)));
    }
    catch (err) {
        console.error('error while request processing');
        console.log(err.message);
        res.status(500).json({ "error": "error while request processing" });
    }
}

export async function deleteReviewById(req: any, res: Response) {
    try {
        await reviewService.deleteReview(req, res);
    }
    catch(err) {
        console.error('error while request processing');
        console.log(err.message);
    }
}

export async function updateReview(req: any, res: Response) {
    try {
        await reviewService.updateReview(req, res);
    }
    catch (err) {
        console.error('error while request processing');
        console.log(err.message);
    }
}

export async function getUsersReviews(req: any, res: Response) {
    try {
        await reviewService.getUsersReviews(req, res);
    }
    catch (err) {
        console.error('error while request processing');
        console.log(err.message);
        res.status(500).json({ "error": "error while request processing" });
    }
}