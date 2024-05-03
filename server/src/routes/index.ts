import express from 'express';
import { router } from './users.route.ts';

export const routes = express.Router();

routes.use(router);