import express from "express";
import {createServer} from "node:http";
import {Server} from "socket.io";
import mongoose from "mongoose";
import cors from "cors";
import { connectToSocket } from "./controllers/socketcontroller.js";
import userRoutes from "./routes/user.routes.js";

const app=express();
const server=createServer(app);
const io=connectToSocket(server);


const port=8080;
app.use(cors());
app.use(express.json({limit:"40kb"}));
app.use(express.urlencoded({limit:"40kb",extended:"true"}));

app.use("/api/v1/users",userRoutes);





async function main(){
   const connectionDb= await mongoose.connect("mongodb+srv://tulsi:12345@cluster0.k6uaxoo.mongodb.net/?appName=Cluster0");
console.log(`connected on mongodb host ${connectionDb.connection.host}`);
}
main()
    .then(() => {
        server.listen(port, () => {
            console.log("listening on port 8080");
        });
    })
    .catch((err) => {
        console.error("MongoDB Connection Error:", err.message);
    });
