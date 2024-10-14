const express = require("express")

const app = express()
app.use(express.static("public"))

app.get("/", (req,res)=>{
    res.render("home.ejs")
})

app.get("/about", (req,res)=>{
    res.render("about.ejs")
})

app.get("/contact", (req,res)=>{
    res.render("contact.ejs")
})

//page not found
app.get("*", (req,res)=>{
    res.status(404).render("404.ejs")
})

//start
app.listen(3000, ()=> console.log("server running on port 3000"))
