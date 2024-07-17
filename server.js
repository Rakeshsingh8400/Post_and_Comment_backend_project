import express from "express";
import "dotenv/config";
const app=express();
app.use(express.json());
app.use(express.urlencoded({extended:false}));
const PORT=process.env.PORT||5000;
app.get("/",(req,res)=>{
    return res.send("welcome to the backend page of this project");
})
import router from "./routes/index.js";
app.use(router);

app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`);
})