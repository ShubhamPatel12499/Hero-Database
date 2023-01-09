const express= require("express")
const {HeroModel}=require("../models/Hero.model")
const heroRouter=express.Router()

heroRouter.get("/",async (req,res)=>{
    let query=req.query
    try{
        const heroes=await HeroModel.find(query)
        res.send(heroes)
    }
    catch(err)
    {
       console.log(err)
       res.send({"err":"Something went wrong"})
    }
})

heroRouter.patch("/edit/:id",async (req,res)=>{
    const ID=req.params.id
    const payload=req.body
    try{
      await HeroModel.findByIdAndUpdate({_id:ID},payload)
      res.send(`update the hero data whose id is ${ID} `)
    }
    catch(err){
        console.log(err)
        res.send({"err":"Something went wrong"})
    }
})

heroRouter.delete("/delete/:id", async (req,res)=>{
    const ID=req.params.id
    try{
        await HeroModel.findByIdAndDelete({_id:ID})
        res.send(`Deleted the hero data whose id is ${ID} `)
      }
      catch(err){
          console.log(err)
          res.send({"err":"Something went wrong"})
      }
})

heroRouter.post("/add", async (req,res)=>{
     const data=req.body
     try{
        const hero=new HeroModel(data)
        await hero.save()
        console.log(hero);
        res.send("Added the hero")
     }
     catch(err){
       console.log(err)
       res.send({"err":"Something went wrong"})
     }
 
})

module.exports={
    heroRouter
}