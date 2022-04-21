const express=require("express");
const app = express();
const port = 3000

app.get('/home',(req,res)=>{
    res.send("welcome to my home page");
});
app.get('/about',(req,res)=>{
    res.send("welcome to my about page");
})
app.get('/contact',(req,res)=>{
    res.send("welcome to my contact page");
})
app.get('/temp',(req,res)=>{
    res.send([
        {
        id:4,
        name:"navneet",
        role:"developer"
    }
]);
})
//the method are identicalwhen an object or array is passed,but res.json()
//will also convert non-object,
//such as null and undefined,which are not valid json

app.listen(port, ()=>{
    console.log(`listening to the port no ${port}`);
});
