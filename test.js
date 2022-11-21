const mongoose = require("mongoose")
const Post = require("./models/Post")

mongoose.connect("mongodb+srv://Uchqunjon:TQlUoX6tSM5i1F4A@cluster0.f7rq1hg.mongodb.net/node-blog-post")

Post.find({}, (err, post) => console.log(post))
// Post.create({
//     title: "My second blog",
//     description: "My second description",
//     content: "lorem ipson second content"
// }, (err, post) => {console.log(err, post);})