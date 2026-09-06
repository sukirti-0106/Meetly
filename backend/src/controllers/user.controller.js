import httpStatus from "http-status";
import { User } from "../models/user.model.js";
import bcrypt,{hash} from "bcrypt";
import crypto from "crypto";
import { Meeting } from "../models/meeting.model.js";



const login=async (req,res)=>{
   
    const {username,password}=req.body;
    if(!username||!password){
        return res.status(402).json({message:"values cannot be null"
        })
    }
    try{
        
       const user=await User.findOne({username});
       if(!user){
        return res.status(httpStatus.NOT_FOUND).json({message:"User not found"});
       }
       
       let isPasswordcorrect=await bcrypt.compare(password,user.password)
       if(isPasswordcorrect){
        
        let token=crypto.randomBytes(20).toString("hex");
        user.token=token;
        user.save();
        
        res.status(httpStatus.OK).json({token:token});
       }
       else{
        res.status(httpStatus.UNAUTHORIZED).json({message:"invalid username or password"})
       }
    }
    catch(e){
        return res.status(500).json({ message: "something went wrong" });
    }
}

const register = async (req, res) => {
    console.log("1. Register endpoint hit with body:", req.body); // Let's see if data arrives
    const { name, username, password } = req.body;

    try {
       console.log("2. Checking if user exists...");
       const existingUser = await User.findOne({ username });
       if (existingUser) {
        return res.status(httpStatus.FOUND).json({ message: "user already exists" });
       }
       
       console.log("3. Hashing password...");
       const hashedpass = await bcrypt.hash(password, 10);
       
       console.log("4. Creating new user model...");
       const newUser = new User({
        name: name,
        username: username,
        password: hashedpass
       });
       
       console.log("5. Saving to database...");
       await newUser.save();
       
       console.log("6. Saved successfully!");
       return res.status(httpStatus.CREATED).json({ message: "user registered" });
    }
    catch (e) {
       // THIS WILL FORCE THE ERROR TO SHOW IN YOUR TERMINAL
       console.error("CRITICAL REGISTER ERROR:", e);
       return res.status(500).json({ message: e.message || "something went wrong" });
    }
}
const getUserHistory=async (req,res)=>{
    const {token}=req.query;
    try{
        const user=await User.findOne({token:token});
        const meetings=await Meeting.find({user_id:user.username});
        res.json(meetings)
    }catch(e){
       res.json({message:`Something went wrong ${e}`})
    }
    
}
const addToHistory=async (req,res)=>{
    const {token,meeting_code}=req.body;
    try{
        const user=await User.findOne({token:token});
        const newMeeting=new Meeting({
            user_id:user.username,
            meetingCode:meeting_code
        })
        await newMeeting.save();
        res.status(httpStatus.CREATED).json({message:"Added code to history"})
    }
    catch(e){
        res.json({message:`something went wrong ${e}`})
    }
}
export {login,register,getUserHistory,addToHistory};