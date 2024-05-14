import express from "express";
import * as categoryController from '../controllers/categories.controller.ts';
import { verifyToken } from '../middleware/auth.ts'
export const categoriesRouter = express.Router();

categoriesRouter.post('/', verifyToken, categoryController.addCategory);

categoriesRouter.get('/', verifyToken, categoryController.getAllCategories);

categoriesRouter.delete('/', verifyToken, categoryController.deleteCategory)

export default categoriesRouter;