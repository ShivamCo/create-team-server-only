import mongoose from "mongoose"


const userSchema = new mongoose.Schema( { 
    id: Number,
    first_name: String,
    last_name:String,
    email:String,
    gender:String,
    avatar:String,
    domain:String,
    available:Boolean,
    teams:Array
})

export const userModel =  mongoose.model('userModel', userSchema )

