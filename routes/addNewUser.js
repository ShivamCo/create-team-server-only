import { userModel } from "../models/user.js";
import express from "express";


const route = express.Router()

route.post("/add-user", async (req,res) =>{

    let user = req.body

    try {

        const allUsers = await userModel.find()
        const lastUserID = allUsers.length 
        user.id = lastUserID - 9 + 1
        console.log(lastUserID)
        await userModel.insertMany(user).then(console.log("Done"))


    } catch (e){

        res.status(500).json({message: "Unable to Add User"})
        

    }


    
    

    
} )


export {route as addNewUser}

