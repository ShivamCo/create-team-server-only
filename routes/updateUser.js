import { userModel } from "../models/user.js";
import express from "express";


const route = express.Router()

route.put("/update-user", async (req,res) =>{

    let changesData = req.body
    console.log(changesData)


    try {

        const user = await userModel.find({id: changesData.id})
        

        if(user){
            
            await userModel.findOneAndUpdate({id: changesData.id}, changesData).then(res.json("User Details Updated"))
        
        } else{
            res.json("User Does'nt Exists")
        }
         


    } catch (e){

        res.status(500).json({message: "Unable to Add User"})
        

    }


    
    

    
} )


export {route as updateUser}