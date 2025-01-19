const mongoose=require("mongoose");
const stuSchema=new mongoose.Schema({
    rollno:Number,
    name:String,
    city:String,
    fees:Number,
    imgname:String
})
module.exports=mongoose.model("ImageUpload",stuSchema);