const express=require("express");
const app= express();
const path=require("path");
const port=3000




const staticPath =path.join(__dirname,"../public")

//const static = path.join(__dirname,"../public");
//builtin middleware
app.use(express.static(staticPath));



app.get("/",(req,res)=>{
    res.send('Hello world!');
})
app.listen(port, ()=>{
    console.log(`Example app listening on port ${port}`)
})