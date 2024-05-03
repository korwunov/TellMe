import { Request, Response } from 'express';
import * as userService from '../services/users.service.ts';
import * as authService from '../middleware/auth.ts'

export async function register(req: Request, res: Response) {
    try {
        res.json(await authService.register(req, res))
    }
    catch (err) {
        console.log('error while request processing');
        res.status(500).send({'message': err.message})
    }
}


export async function getProfileData(req: Request, res: Response) {

}