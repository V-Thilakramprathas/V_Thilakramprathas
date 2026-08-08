const express=require("express")
const app=express()
app.use(express.json())
const pool=require("./db")
app.listen(process.env.PORT,()=>console.log("Running Successfully..."))

app.get("/",async (req,res)=>{
    try{
        const data=await pool.execute("SELECT * FROM name10");
        console.log(data);
        
        res.status(200).json(data[0]);
    }
    catch(error){
        console.log(error.message);
    }
})