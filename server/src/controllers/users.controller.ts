import { Request, Response } from 'express';
import * as userService from '../services/users.service.ts';
import * as authService from '../middleware/auth.ts'

export async function register(req: Request, res: Response) {
    try {
        res.json(await authService.register(req, res))
    }
    catch (err) {
        console.error('error while request processing');
        console.log(err.message);
    }
}

export async function login(req: Request, res: Response) {
    try {
        res.json(await authService.login(req, res))
    }
    catch (err) {
        console.error('error while request processing');
        console.log(err.message);
    }
}


export async function getProfileData(req: any, res: Response) {
    try {
        res.status(200).json(await userService.getProfileData(req.user.user_id, res))
    }
    catch (err) {
        console.error('error while request processing');
        console.log(err.message);
    }
}

export async function updateProfileData(req: any, res: Response) {
    try {
        res.status(200).json(await userService.updateProfileData(req, res));
    }
    catch (err) {
        console.error('error while request processing');
        console.log(err.message);
    }
}

export async function getAllUsers(req: any, res: Response) {
    try {
        res.status(200).json(await userService.getAllUsers());
    }
    catch (err) {
        console.error('error while request processing');
        console.log(err.message);
    }
}

export async function deleteUserById(req: any, res: Response) {
    res.status(200).json({ 'message': 'STUB for delete user' });
}

export async function getUserById(req: any, res: Response) {
    res.status(200).json({ 'message': 'STUB for get user by id' });
}