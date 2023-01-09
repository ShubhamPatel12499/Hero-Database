const express= require("express")
const {connection}=require("./db")
const {heroRouter}=require("./routes/Hero.route")
const {VillianModel}=require("./models/Villian.model")
const { villianRouter } = require("./routes/Villian.route")
require('dotenv').config()

const app=express()
app.use(express.json())

app.get("/",(req,res)=>{
    res.send("Welcome")
})

app.use("/heroes",heroRouter)
app.use("/villians",villianRouter)

app.listen(process.env.port,async ()=>{
   try{
    await connection
    console.log("Connected to DB")
   }
   catch(err)
   {
    console.log("Error While connecting to DB")
    console.log(err)
   }
   console.log(`Server is running at port ${process.env.port}`)
})