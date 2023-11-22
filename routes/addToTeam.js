
import { userModel } from "../models/user.js";
import express from "express";


const route = express.Router()

route.post("/add-to-team", async (req,res) =>{

    const teamLeadId = req.body.teamLeadID;
    const userID = req.body.userID;
    console.log( req.body, teamLeadId, userID)

    try{
        const check = await userModel.find({id: userID})
        const inTeam = (check[0].teams)?.includes(teamLeadId)
        if( !inTeam ){
            await userModel.findOneAndUpdate({id: userID}, {teams: teamLeadId}).then(res.json("User Added To Team "))
            
         } else {
            res.json("Already In Team")
            console.log("Already In Team")
         }

         
        
        

    } catch (e){

        res.status(500).json({message: e.message})

    }

    
    
} )


export {route as addToTeam}

