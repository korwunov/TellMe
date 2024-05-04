import { jwt } from 'jsonwebtoken';
import User from "../models/user.ts";
import { ObjectId } from 'mongoose';
import { Response } from 'express'

export async function getProfileData(userId: string, res: Response) {
    const userData = await User.findById(userId);
    if (userData === null) return res.status(404).json({ "error": `user with ${userId} not found`})
    return userData;
}

export async function updateProfileData(req: any, res) {
    const { firstName, lastName, email } = req.body;
    const userId = req.user.user_id;
    console.log(userId)
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
