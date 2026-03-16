import User from "../models/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv"
dotenv.config()
const otpGenerate = () => {
    const otp = Math.floor(100000 + Math.random() * 900000);
    return otp;
};

const passwordHash = async (password) => {
    const salt = 10;
    const passHash = await bcrypt.hash(password, salt);
    return passHash;
};

const generateAccessToken=(id)=>{
    return jwt.sign({id}, process.env.JWT_SECRET,{
        expiresIn:process.env.ACCESS_TOKEN_EXPIRES || "10m"
    })
}

const refreshAccessToken=(id)=>{
    return jwt.sign({id}, process.env.JWT_SECRET,{
        expiresIn:process.env.REFRESH_TOKEN_EXPIRES || "15d"
    })
}

const userRegister = async (req, res) => {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
        return res.status(400).json({ message: "All fields are required" });
    }

    try {
        const userExist = await User.findOne({ email });

        if (userExist) {
            return res.status(400).json({ message: "User already exist" });
        }

        const hashedPassword = await passwordHash(password);
        const otp = otpGenerate();

        const user = new User({
            name,
            email,
            password: hashedPassword,
            otp
        });

        const userdata = await user.save();

        return res.status(201).json({
            message: "User registered successfully",
            user: userdata
        });

    } catch (error) {
        return res.status(500).json({ message: "Error registering user" });
    }
};

const login = async (req, res) => {

    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ message: "All fields required" });
    }

    try {

        const user = await User.findOne({ email });

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(400).json({ message: "Invalid password" });
        }

        const accessToken= generateAccessToken(user._id)
        const refreshToken= refreshAccessToken(user._id)

        return res.status(200).json({
            accessToken,
            refreshAccessToken,
            message: "Login successful",
            user
        });

    } catch (error) {
        return res.status(500).json({ message: "Error logging in" });
    }

};

export { userRegister, otpGenerate, login };


// destructuring is used to extract the data from the request body and
//  store it in the variable name, email, password. 
// This is a common practice in JavaScript to make the code cleaner and more readable. 
// The userRegistr function is an asynchronous function that will handle the user registration process. 
// It will take the user data from the request body, create a new user in the database, 
// and return a response to the client.
// there are two ways to export the function in JavaScript:
// 1. Named export: You can export the function using the export keyword before the function declaration. 
//    This allows you to export multiple functions from the same file.
// 2. Default export: You can export the function as the default export of the file. 
//    This allows you to export a single function from the file and import it without using curly braces. 
//    You can only have one default export per file.
