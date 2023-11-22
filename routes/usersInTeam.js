import { userModel } from "../models/user.js";
import express from "express";

const router = express.Router()

router.get("/team", async (req,res)=> {

    const teamLeadID = req.body.teamLeadID
    console.log(teamLeadID)

    try{

        const isTeamLead = await userModel.find({teams: teamLeadID})
        res.json(isTeamLead)

        

    } catch (e){

        res.status(500).json({message: e.message})

    }

})


export {router as usersInTeam}


