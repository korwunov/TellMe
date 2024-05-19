import { Request, Response } from 'express';
import * as categoryService from "../services/categories.service.ts"

export async function getAllCategories(req: any, res: Response) {
    try {
        res.status(200).json(await categoryService.getAllCategories());
    }
    catch(err) {
        console.error('error while request processing');
        console.log(err.message);
    }
}

export async function addCategory(req: any, res: Response) {
    try {
        await categoryService.addCategory(req, res);
    }
    catch(err) {
        console.error('error while request processing');
        console.log(err.message);
    }
}

export async function deleteCategory(req: any, res: Response) {
    try {
        const { id } = req.body;
        if (id === "") res.send(400).json({ "error": "no id in request" });
        res.status(200).json(await categoryService.deleteCategoryById(id))
    }
    catch(err) {
        console.error('error while request processing');
        console.log(err.message);
    }
}

export async function updateCategory(req: any, res: Response) {
    try {
        await categoryService.updateCategory(req, res);
    }
    catch(err) {
        console.error('error while request processing');
        console.log(err.message);
    }
}