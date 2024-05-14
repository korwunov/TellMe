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