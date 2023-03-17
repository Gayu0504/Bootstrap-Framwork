var express=require("express");
var app= express();


app.get("/",(req,res)=>{
    res.sendFile(__dirname +"/pages/home.html");
});
app.get("/about",(req,res)=>{
    res.end("about page");
})

app.get("/contact",(req,res)=>{
    res.end("contact page");
})

app.listen(8081,()=>{
    console.log("website running on http://localhost:8081/");
});