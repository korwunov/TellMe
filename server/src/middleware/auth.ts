import jwt from "jsonwebtoken";
import User from "../models/user.ts";
import { Request, Response, NextFunction } from "express";
import bcryptjs from 'bcryptjs'

const { AUTH_SECRET_KEY } = process.env;

const adminRoutes = [
  '/users'
]

async function isAdmin(user_id: string) : Promise<Boolean>{
  const user = await User.findById(user_id);
  //console.log('USER FOUND WHILE ROLE DETERMINATION ', user);
  return user.isAdmin;
}

export async function login(req, res) {
    // Our login logic starts here
    try {
        // Get user input
        const { email, password } = req.body;

        // Validate user input
        if (!(email && password)) {
          return res.status(400).json({ "error": "no email or password" });
        }
        // Validate if user exist in our database
        const user = await User.findOne({ email });
        if (user && (await bcryptjs.compare(password, user.password))) {
        // Create token
            const token = jwt.sign(
                { user_id: user._id, email },
                  AUTH_SECRET_KEY,
                {
                  expiresIn: "5h",
                }
            );

            // save user token
            // user.token = token;

            // user
            return res.status(200).json({ "token": token });
        }
        res.status(400).send("Invalid Credentials");
    }
    catch (err) {
        console.log(err);
        res.status(400).send("Invalid Credentials");
    }
}


export async function verifyToken(req: any, res: Response, next: NextFunction) {
  const token = req.headers["x-access-token"];
  const route = req.originalUrl;
  //console.log(route);
  if (!token) {
    return res.status(403).send("A token is required for authentication");
  }
  try {
    const decodedUser = jwt.verify(token, AUTH_SECRET_KEY);

    if (adminRoutes.includes(route)) {
      if (await isAdmin(decodedUser.user_id)) {}
      else return res.status(403).json({ "error": "you are not allowed to go here"});
    }

    req.user = decodedUser;
  } catch (err) {
    return res.status(401).send("Invalid Token");
  }
  return next();
};

export async function register(req, res) {
    // Our register logic starts here
   try {
    // Get user input
    const { firstName, lastName, email, password } = req.body;

    // Validate user input
    if (!(email && password && firstName && lastName)) {
      res.status(400).send("All input is required");
    }

    // check if user already exist
    // Validate if user exist in our database
    const oldUser = await User.findOne({ email });

    if (oldUser) {
      return res.status(401).send("User Already Exist. Please Login");
    }

    //Encrypt user password
    let encryptedUserPassword = await bcryptjs.hash(password, 10);

    // Create user in our database
    const user = await User.create({
      first_name: firstName,
      last_name: lastName,
      email: email, // sanitize
      password: encryptedUserPassword,
      isAdmin: false,
    });

    // Create token
    // const token = jwt.sign(
    //   { user_id: user._id, email },
    //     process.env.TOKEN_KEY,
    //   {
    //     expiresIn: "5h",
    //   }
    // );
    // save user token
    //user.token = token;

    // return new user
    res.status(201).json(user);
  } catch (err) {
    console.log(err);
  }
  // Our register logic ends here
};