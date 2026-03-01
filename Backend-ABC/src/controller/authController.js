import User from "../models/User.js";

// const otpGenerate = () =>{
//     const otp = Math.floor(100000 + Math.random() * 900000);
//     return otp;
// }

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



export {userRegister}


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
