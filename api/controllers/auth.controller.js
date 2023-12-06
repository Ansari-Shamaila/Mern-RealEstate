import User from '../models/user.model.js';
//b crypt is being used to hide the password from the database
import bcryptjs from 'bcryptjs';
import { errorHandler } from '../utils/error.js';
export const signup = async(req,res,next)=>{
    //here want to get the information from the browser
    const { username, email, password} = req.body;
    const hashedPassword = bcryptjs.hashSync(password,10);
    const newUser = new User({ username, email, password:hashedPassword});
    try {
        await newUser.save()
        res.status(201).json("User created successfully");
    } catch (error) {
        next(error);
    }
  

};