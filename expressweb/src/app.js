const express = require("express");
const path = require("path")
const app = express();
const port =8090;
const hbs = require("hbs");

app.set("view engine","hbs");
const dynamicPath = path.join(__dirname,"../templates");
app.set("views",dynamicPath);


const staticPath = path.join(__dirname,"../public/")
app.use(express.static(staticPath));
app.get("/",(req,res)=>{
    res.render("index")
});
app.get("/about",(req,res)=>{
    res.render("about");
});
app.get("/weather",(req,res)=>{
    res.render("weather")
});
app.get("/*",(req,res)=>{
    res.render("error",{
        errmsg:"Error Found",
    })
})
app.listen(port,()=>{
    console.log("done");
});