const express=require("express");
const app=express();
const cors=require("cors")
const bodyparser=require("body-parser");
const mongoose=require("mongoose");
const StuRoute=require("../backend/routes/stuRoutes")
app.use(cors());
app.use(bodyparser.urlencoded({ extended: true }))
app.use(bodyparser.json())
mongoose.connect("mongodb://127.0.0.1:27017/Clodly").then(()=>{
    console.log("DB Connected")
})
app.use("/user",StuRoute);
app.listen(8000,(req,res)=>{
    console.log("Server Run on Port 8000")
})