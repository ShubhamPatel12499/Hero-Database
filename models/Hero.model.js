const mongoose = require("mongoose")

const heroSchema=mongoose.Schema({
    name:String,
    city:String,
    power:Number,
    villian:String,
    language:String,
    is_active:Boolean
})

const HeroModel=mongoose.model("hero",heroSchema)

module.exports={
    HeroModel
}