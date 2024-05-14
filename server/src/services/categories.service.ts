import Category from "../models/category.ts"
import { Response } from "express";
import { Types } from 'mongoose';

export async function getAllCategories() {
    const data = await Category.find();
    return data;
}

export async function addCategory(req: any, res: Response) {
    const { name } = req.body;
    const category = await Category.create({
        category_name: name
    });

    res.status(200).json(category);
}

export async function deleteCategoryById(id: string) {
    await Category.deleteOne({ _id: new Types.ObjectId(id)});
}