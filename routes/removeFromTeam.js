import { userModel } from "../models/user.js";
import express from "express";


const route = express.Router()

route.delete("/remove-from-team", async (req,res) =>{

    let userID= req.body.dataToDelete.userID
    let teamLeadId = req.body.dataToDelete.teamLeadId
    


    try {
        
        await userModel.findOneAndUpdate({_id: userID}, {teams: {$pull : [teamLeadId]}})
        

    } catch (e){

        res.status(500).json({message: "Unable to Remove User"})
        
        

    }


    
    

    
} )


export {route as removeFromTeam}