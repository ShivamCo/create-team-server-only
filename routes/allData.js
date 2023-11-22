import { userModel } from "../models/user.js";
import express from "express";



const router = express.Router()




router.get("/all-user-data", async (req,res)=> {

    try{

        const users = await userModel.find()
        res.json(users)

    } catch (e){

        res.status(500).json({message: e.message})

    }

})


export {router as allData}


