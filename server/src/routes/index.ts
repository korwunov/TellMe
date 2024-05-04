import express from 'express';
import { usersRouter } from './users.route.ts';

export const routes = express.Router();

routes.use(usersRouter);