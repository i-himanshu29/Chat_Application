import User from "../models/user.model.js";
import bcrypt from "bcryptjs"
import gererateTokenAndSetCookie from "../utils/generateToken.js";
export const signup = async (req,res)=>{
    try{
        const {fullName,username,password,confirmPassword,gender} = req.body;
        if(password!==confirmPassword){
            return res.status(400).json({error:"Password don.t match"})
        }
        const user = await User.findOne({username})
        if(user){
            return res.status(400).json({error:"Username already exists"})
        }
        // Hash password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password,salt);

        // https://avatar.iran.liara.run/
        const boyProfilePic  = `https://avatar.iran.liara.run/public/boy?username=${username}`
        const girlProfilePic  = `https://avatar.iran.liara.run/public/girl?username=${username}`
        const newUser = new User({
            fullName,
            username,
            password:hashedPassword,
            gender,
            profilePic:gender === "male"?boyProfilePic:girlProfilePic
        })

        if(newUser){
            // generate JWT token here
            gererateTokenAndSetCookie(newUser._id,res);
            await newUser.save();
            res.status(201).json({
                _id:newUser._id,
                fullName:newUser.fullName,
                username:newUser.username,
                profilePic:newUser.profilePic

            })
        }else{
            res.status(400).json({error:"Invalid user data"})
        }
    }catch(error){
        console.log("Error in signup controller",error.message);
        res.send(500).json({error:error.message})
    }
}

export const login = async (req,res)=>{
   try {
        const {username,password} = req.body;
        const user = await User.findOne({username});
        const isPasswordCorrect = await bcrypt.compare(password,user?.password || "");

        if(!user || !isPasswordCorrect) {
            return res.status(400).json({error:"Invalid username or password"})
        }

        gererateTokenAndSetCookie(user._id,res);
         
            res.status(201).json({
                _id:user._id,
                fullName:user.fullName,
                username:user.username,
                profilePic:user.profilePic

            });
   } catch (error) {
        console.log("Error in login controller", error.message);
        res.status(500).json({error:"Internal server error"});
   }
};

export const logout = async (req,res)=>{
    console.log("Logout User");
    try {
        res.status("jwt" , "" , {maxAge:0});
        res.status(200).json({message:"Logged out successfully"});
    } catch (error) {
        console.log("Error in logout controller",error.message);
        res.status(500).json({error:"Intrnal sever error"});
    }
}

