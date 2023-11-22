import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import 'dotenv/config'
import bodyParser from "body-parser";


//Routes
import { allData } from "./routes/allData.js";
import { userByData } from "./routes/userByData.js";
import { addNewUser } from "./routes/addNewUser.js";
import { updateUser } from "./routes/updateUser.js";
import { removeUser } from "./routes/removeUser.js";
import { addToTeam } from "./routes/addToTeam.js";
import { usersInTeam } from "./routes/usersInTeam.js";
import { removeFromTeam } from "./routes/removeFromTeam.js";

const app = express();
app.use(cors())

//body-parser setup
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


//.env setup
const PORT = process.env.PORT || 5000
const MONGO_DB = process.env.MONGO_DB

// MongoDB Connect
mongoose.connect(MONGO_DB);


//Routes
app.use("/api/", allData)
app.use("/api/", userByData)
app.use("/api/", addNewUser)
app.use("/api/", updateUser)
app.use("/api/", removeUser)
app.use("/api/", addToTeam)
app.use("/api/", usersInTeam)
app.use("/api/", removeFromTeam)




app.listen(PORT, ()=> {
    console.log(`Server is Live on ${PORT}`)
})