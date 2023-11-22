import { userModel } from "../models/user.js";
import express from "express";


const route = express.Router()

route.delete("/remove-user", async (req,res) =>{

    let changesData = req.body
    console.log(changesData.id)

    const user = await userModel.find({id: changesData.id})
    try {

        if(user){
            
            await userModel.deleteMany({id: changesData.id}).then(console.log("User Removed"))
        
        } else{
            res.json("User Does'nt Exists")
        }
         


    } catch (e){

        res.status(500).json({message: "Unable to Remove User"})
        
        

    }


    
    

    
} )


export {route as removeUser}