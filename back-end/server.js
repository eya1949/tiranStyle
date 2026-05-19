import express from "express"
import cors from "cors";
import connectDB from "./src/config/db.js";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());

app.use(express.json());
// Connect to MongoDB

connectDB();

app.get("/",(req,res)=>{
    res.json({message:"Server is running"})
})

const PORT = process.env.PORT || 5000;


app.listen(PORT, ()=>{
  console.log(`🚀 Server listening on http://localhost:${PORT}`);
    
})