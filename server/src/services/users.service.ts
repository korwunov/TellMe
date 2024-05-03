import { jwt } from 'jsonwebtoken';
import User from "../models/user";
import bcryptjs from 'bcryptjs'

export async function getProfileData(req: any, res: Response) {
    //в req бдует приходить id пользователя
    //выполнить поиск по id и вернуть
}
