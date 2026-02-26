import mongoose from "mongoose";

const userAdd = new mongose.Schema({
    UserId:{type:mongoose.Schema.Types.ObjectId, ref:"User", required:true},
    address:{type:String, required:true}
})

const User = mongoose.model("User", userSchema)


// export {User};
export default User;