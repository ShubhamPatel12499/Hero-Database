const mongoose = require("mongoose")

const villianSchema=mongoose.Schema({
    name:String,
    city:String,
    power:Number,
    hero:String,
    language:String,
    is_active:Boolean
})

const VillianModel=mongoose.model("villian",villianSchema)

module.exports={
    VillianModel
}