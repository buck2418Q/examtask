import dotenv from "dotenv"
import  express from "express";
import cors from "cors"
import mongoose from "mongoose";
import { CreateStates, GetState } from "./Controller/StatesCOnt.js";
import { CreateCountry, GetCountry } from "./Controller/CountryCont.js";


dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());


mongoose.connect(process.env.db_url).then(
    console.log("databse connectes"),
    app.listen(process.env.port,console.log("port is running"))

);

app.post("/state",CreateStates);
app.get("/state",GetState);


app.post("/cont",CreateCountry);
app.get("/cont",GetCountry);