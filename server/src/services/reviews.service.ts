import { ObjectId } from 'mongodb';
import Review from "../models/review.ts";
import Category from "../models/category.ts"
import User from "../models/user.ts";
import { Response } from "express"
import review from '../models/review.ts';

export async function getAllReviews() {
    const mongoData = await Review.find();
    var data = JSON.parse(JSON.stringify(mongoData));
    for await (let review of data) {
        let categoryId = review.category;
        let categoryName = (await Category.findById(categoryId)).category_name;

        let userData = await User.findById(review.owner);
        let userName = userData.first_name + " " + userData.last_name.substring(0, 1) + ".";
        review.category_name = categoryName;
        review.owner_name = userName;
    }
    return data;
}

export async function getReviewById(id: string) {
    const data = await Review.findById(id);
    var review = JSON.parse(JSON.stringify(data));
    let categoryId = review.category;
    let categoryName = (await Category.findById(categoryId)).category_name;

    let userData = await User.findById(review.owner);
    let userName = userData.first_name + " " + userData.last_name.substring(0, 1) + ".";
    review.category_name = categoryName;
    review.owner_name = userName;
    return review;
}

export async function addReview(req: any, res: Response) {
    const { title, address, text, rate, category } = req.body;
    const userId = req.user.user_id;

    if (!(userId && title && address && text && rate && category)) {
        return res.status(400).send("title, address, text, rate, category_id are required");
    }

    let userData = await User.findById(userId);
    if (userData === null) return res.status(404).json({ "error": `user with ${userId} not found`});

    const review = await Review.create({
        title: title,
        owner: userId,
        address: address,
        text: text,
        rate: rate,
        category: category
    });

    let userReviews = userData.reviews;
    userReviews.push(review._id);
    await User.findOneAndUpdate({ _id: userId }, { reviews: userReviews});

    res.status(200).json(review);
}

export async function deleteReview(req: any, res: Response) {
    const { id } = req.body;

    if (!id) {
        res.status(400).json({ "error": "review id is required" });
        return;
    }

    const review = await Review.findById(id);
    const currentUser = await User.findById(req.user.user_id);
    const reviewOwnerUser = await User.findById(review.owner);

    if (!review || !currentUser) {
        res.status(404).json({ "error": "not found" });
        return;
    }

    if (currentUser.isAdmin || review.owner.toString() === currentUser._id.toString()) {
        await User.findOneAndUpdate({ _id: reviewOwnerUser._id }, { $pull: { reviews: id } });

        res.status(200).json(await Review.findOneAndDelete({ _id: review._id }));
        return;
    }
    else {
        res.status(403).json({ "error": "you are not allowed to modify review of other user" });
        return;
    }
}

export async function updateReview(req: any, res: Response) {
    const { _id, title, address, text, rate, category } = req.body;

    if (!_id || !title || !address || !text || !rate || !category) {
        res.status(400).json({ "error": "_id, title, address, text, rate, category are required" });
        return;
    }

    try {
        if ((String)(ObjectId.createFromHexString(_id)) !== _id || (String)(ObjectId.createFromHexString(category)) !== category) {
            res.status(400).json({ "error": "bad object ids for review or category" });
            return;
        }
    }
    catch {
        res.status(400).json({ "error": "bad object ids for review or category" });
        return;
    }
    

    const review = await Review.findById(_id);
    const currentUser = await User.findById(req.user.user_id);
    const newCategory = await Category.findById(category);

    if (!review || !currentUser || !newCategory) {
        res.status(404).json({ "error": "not found" });
        return;
    }

    if (currentUser.isAdmin || review.owner.toString() === currentUser._id.toString()) {
        await Review.findOneAndUpdate(
            { _id: review._id }, 
            { 
                title: title, 
                address: address,
                text: text,
                rate: rate,
                category: category
            }
        );
        res.status(200).json(await Review.findById(_id));
        return;
    }
    else {
        res.status(403).json({ "error": "you are not allowed to modify review of other user" });
        return;
    }
}

export async function getUsersReviews(req: any, res: Response) {
    const currentUser = await User.findById(req.user.user_id);
    let reviewsIds = currentUser.reviews;
    let reviews = await Review.find({
        _id: { $in: reviewsIds }
    });
    var data = JSON.parse(JSON.stringify(reviews));
    for await (let review of data) {
        let categoryId = review.category;
        let categoryName = (await Category.findById(categoryId)).category_name;

        let userData = await User.findById(review.owner);
        let userName = userData.first_name + " " + userData.last_name.substring(0, 1) + ".";
        review.category_name = categoryName;
        review.owner_name = userName;
    }
    res.status(200).json(data);
    return;
}