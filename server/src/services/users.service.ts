import User from "../models/user.ts";
import { Response } from 'express'

export async function getProfileData(userId: string, res: Response) {
    const userData = await User.findById(userId).select('-password');
    if (userData === null) return res.status(404).json({ "error": `user with ${userId} not found`})
    return userData;
}

export async function updateProfileData(req: any, res: Response) {
    const { firstName, lastName, email } = req.body;
    const userId = req.user.user_id;
    if (!(userId && email && firstName && lastName)) {
        return res.status(400).send("fisrtName, lastName, email are required");
    }

    let userData = await User.findById(userId);

    if (userData === null) return res.status(404).json({ "error": `user with ${userId} not found`});

    await User.updateOne(
        { _id: userId }, 
        { first_name: firstName, last_name: lastName, email: email }
    );
    userData = await User.findById(userId);
    return userData; 
}

export async function getAllUsers() {
    const data = await User.find().select('-password');
    return data;
}
