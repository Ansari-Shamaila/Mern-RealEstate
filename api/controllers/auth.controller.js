import User from '../models/user.model.js';
//b crypt is being used to hide the password from the database
import bcryptjs from 'bcryptjs';
export const signup = async(req,res)=>{
    //here want to get the information from the browser
    const { username, email, password} = req.body;
    const hashedPassword = bcryptjs.hashSync(password,10);
    const newUser = new User({ username, email, password:hashedPassword});
    try {
        await newUser.save()
        res.status(201).json("User created successfully");
    } catch (error) {
        res.status(500).json(error.message);
    }
  

};