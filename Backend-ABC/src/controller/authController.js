import User from "../models/User.js";

const otpGenerate = () =>{
    const otp = Math.floor(100000 + Math.random() * 900000);
    return otp;
}

const userRegister = async(req, res) =>{
    const {name,email,password} = req.body;
    if(!name || !email || !password){
        return res.status(400).json({message:"All fields are required"});
    }
    try {
        const userExist = await User.findOne({email});

        if(userExist){
            return res.status(402).json({message:"User already exist"});
        }
        
        // const otp = otpGenerate();
        const user = new User({name,email,password});

        const userdata =  await user.save();

        if(!userdata){
            return res.status(400).json({message:"User registration failed"});
        }
        return res.status(201).json({message:"User registered successfully", user:userdata});
        
    } catch (error) {

        
    }
    
    
}

const otp_verify= async(req, res) =>{
    const {otp ,email} = req.body;
    if(!otp || !email){
        return res.status(400).json({message:"All fields are required"});
    }
    try{
        const user = await User.findOne({email});

        if(!user){
            return res.status(404).json({message:"User not found"});
        } 
        if(user.otp !== otp){
            return res.status(400).json({message:"Invalid OTP"});
        }
            user.isVerified = true;
            user.otp = undefined;
            await user.save();
    } catch (error) {
        return res.status(500).json({message:"Error verifying OTP"});
    }
    return res.status(200).json({message:"OTP verified successfully"});
}


const getusers = async(req,res)=>{
    try{
        const users = await User.find();
        return res.status(200).json({message:"Users fetched successfully", users})
    } catch (error) {
        return res.status(500).json({message:"Error fetching users"});
    }
}

const login = async(req,res)=>{
    const {email,password} = req.body;
    if(!email || !password){
        return res.status(400).json({message:"All fields are required"});
    }
    try {
        const user = await User.findOne({email});

        if(!user){
            return res.status(404).json({message:"User not found"});
        }
        if(user.password !== password){
            return res.status(400).json({message:"Invalid password"});
        }
        return res.status(200).json({message:"User logged in successfully", user});
    } catch (error) {
        return res.status(500).json({message:"Error logging in"});
    }
}


export {userRegister, otp_verify, getusers, otpGenerate, login};


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
