import jwt from "jsonwebtoken";
import User from "../models/user.ts";
import { Request, Response, NextFunction } from "express";
import bcryptjs from 'bcryptjs'

const { AUTH_SECRET_KEY } = process.env;

const ADMIN_ROUTES = [
  {
    path: '/api/users',
    method: 'GET'
  },
  {
    path: '/api/users/delete',
    method: 'DELETE'
  },
  {
    path: '/api/users/getById',
    method: 'GET'
  }
]

function isAdminController(req: any) {
  const routeObj = {
    path: req.originalUrl,
    method: req.method
  }

  const serachResult = ADMIN_ROUTES.find((obj) => {
    return obj.path === routeObj.path && obj.method == routeObj.method
  });
  
  return serachResult !== undefined ? true : false;
}

async function isAdminUser(user_id: string) : Promise<Boolean>{
  const user = await User.findById(user_id);
  return user.isAdmin;
}

export async function login(req, res) {
    try {
        const { email, password } = req.body;

        if (!(email && password)) {
          return res.status(400).json({ "error": "no email or password" });
        }
        const user = await User.findOne({ email });
        if (user && (await bcryptjs.compare(password, user.password))) {
            const token = jwt.sign(
                { user_id: user._id, email },
                  AUTH_SECRET_KEY,
                {
                  expiresIn: "5h",
                }
            );
            //user.select('-password');
            return res.status(200).json({ 
              "user": user,
              "token": token 
            });
        }
        res.status(400).json({ "error": "invalid credentials" });
    }
    catch (err) {
        console.log(err);
        res.status(400).json({ "error": "invalid credentials" });
    }
}


export async function verifyToken(req: any, res: Response, next: NextFunction) {
  const token = req.headers["x-access-token"];
  if (!token) {
    return res.status(403).json({ "error": "a token is required for authentication" });
  }
  try {
    const decodedUser = jwt.verify(token, AUTH_SECRET_KEY);

    /*
      Проверка, что пользователь является админом, 
      прежде чем пустить его туда, где нужны админские права
    */
    if (isAdminController(req)) {   
      if (!await isAdminUser(decodedUser.user_id)) 
        return res.status(403).json({ "error": "you are not allowed to go here"});
    }

    req.user = decodedUser;
  } catch (err) {
    return res.status(401).send("Invalid Token");
  }
  return next();
};

export async function register(req: Request, res: Response) {
   try {
    const { firstName, lastName, email, password } = req.body;

    if (!(email && password && firstName && lastName)) {
      res.status(400).send("All input is required");
    }
    const oldUser = await User.findOne({ email });

    if (oldUser) {
      return res.status(401).send("User Already Exist. Please Login");
    }
    let encryptedUserPassword = await bcryptjs.hash(password, 10);
    const user = await User.create({
      first_name: firstName,
      last_name: lastName,
      email: email,
      password: encryptedUserPassword,
      isAdmin: false,
    });

    return res.status(201).json(user);
  } catch (err) {
    console.log(err);
  }
};