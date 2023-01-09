const express= require("express")
const {VillianModel}=require("../models/Villian.model")
const villianRouter=express.Router()

villianRouter.get("/",async (req,res)=>{
    let query=req.query
    try{
        const villians=await VillianModel.find(query)
        res.send(villians)
    }
    catch(err)
    {
       console.log(err)
       res.send({"err":"Something went wrong"})
    }
})

villianRouter.patch("/edit/:id",async (req,res)=>{
    const ID=req.params.id
    const payload=req.body
    try{
      await VillianModel.findByIdAndUpdate({_id:ID},payload)
      res.send(`update the villian data whose id is ${ID} `)
    }
    catch(err){
        console.log(err)
        res.send({"err":"Something went wrong"})
    }
})

villianRouter.delete("/delete/:id", async (req,res)=>{
    const ID=req.params.id
    try{
        await VillianModel.findByIdAndDelete({_id:ID})
        res.send(`Deleted the villian data whose id is ${ID} `)
      }
      catch(err){
          console.log(err)
          res.send({"err":"Something went wrong"})
      }
})

villianRouter.post("/add", async (req,res)=>{
     const data=req.body
     try{
        const villian=new VillianModel(data)
        await villian.save()
        console.log(villian);
        res.send("Added the hero")
     }
     catch(err){
       console.log(err)
       res.send({"err":"Something went wrong"})
     }
 
})

module.exports={
   villianRouter
}