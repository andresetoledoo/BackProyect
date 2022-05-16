const express = require("express");
const { default: mongoose } = require("mongoose");
const postsRouter = require("./routes/posts");
const cors = require("cors");
require("dotenv").config();


const app = express();
const port = 4000;

app.use(cors())//you allow all websites get data
app.use(express.json());
app.use('/posts',postsRouter);
app.use((error,req,res,next)=>{
    console.error(error.stack)
    res.status(500).json({message:error.message})
    
});

const conectDb = ()=>{
    try{
        mongoose.connect(process.env.DB_URI)
        console.log("Data base is connected")
    }catch(e){
        console.error("Conection error")
    }
}

app.listen(port,()=>{
    console.log(`server started on port: ${port}`);
    conectDb()
});