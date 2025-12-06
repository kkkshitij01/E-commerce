import bcrypt from "bcrypt"
import validator from "validator"
import jwt from "jsonwebtoken"
import userModel from "../models/userModel.js"

const createToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET);
}


//Route for user login
export const loginUser = async (req, res) => {

}

//Route for user Register
export const registerUser = async (req, res) => {
    try {
        const { name, email, password } = req.body
        //CKECK IF USER WITH SAME EMAIL EXIST OR NOT 
        const exist = await userModel.findOne({ email });
        if (exist) {
            return res.json({ success: false, message: "User Already Exist" });
        }
        //VALIDATION USER EMAIL AND PASSWORD
        if (!validator.isEmail(email)) {
            return res.json({ success: false, message: "Please Enter a Valid Email" });
        }
        if (password.length < 8) {
            return res.json({ success: false, message: "Please Enter a Strong Password" });
        }
        //HASHING USER PASSWORD
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        const newUser = new userModel({
            name, email, password: hashedPassword,
        })
        const user = await newUser.save();
        //CREATING USER TOKEN 
        const token = createToken(user._id);
        return res.json({ success: true, token });
    } catch (e) {
        console.log(e);
        return res.json({ success: false, message: e.message })
    }
}
//Route for admin login
export const adminLogin = async (req, res) => {

}