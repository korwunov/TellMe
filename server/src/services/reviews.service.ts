import Review from "../models/review.ts";
import Category from "../models/category.ts"
import User from "../models/user.ts";
import { Response } from "express"

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

export async function addReview(req: any, res: Response) {
    const { title, address, text, rate, category_id } = req.body;
    const userId = req.user.user_id;

    if (!(userId && title && address && text && rate && category_id)) {
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
        category: category_id
    });

    res.status(200).json(review);
}