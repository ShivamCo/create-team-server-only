import { userModel } from "../models/user.js";
import express from "express";

const route = express.Router()

route.get("/user/:id", async (req, res) => {

    try {
        const id = req.params.id
        const user = await userModel.find({ id: id })


        if (!user) {
            return res.status(404).json({ message: "Page Not Found" })
        }

        res.json(user)


    } catch (e) {

        res.status(500).json({ message: e.message })

    }


})

export { route as userByData }