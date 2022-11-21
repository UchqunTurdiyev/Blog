const express = require("express");
const path = require("path")
const expressEdge = require("express-edge")
const mongoose = require("mongoose")

const app = express()

mongoose.connect("mongodb+srv://Uchqun:jlQyxD5hHmZkpJwa@cluster0.e7fuxit.mongodb.net/node-blog")

app.use(express.static("publik"))
app.use(expressEdge.engine)

app.set("views", `${__dirname}/views`)

app.get("/", (req, res) => {
    res.render("index")
})

app.get("/about", (req, res) => {
    res.render("about")
})

app.get("/contact", (req, res) => {
    res.render("contact")
})

app.get("/post", (req, res) => {
    res.render("post")
})

const PORT = 5000;
app.listen(PORT, () => {console.log(`server has been started on port ${PORT}...`);})



