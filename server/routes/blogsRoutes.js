const mongoose = require("mongoose");
const Blogs = mongoose.model('blogs');
module.exports = app => {
    app.get('/api/blogs', (request, response) => {
        Blogs.find({}, (err, blogs) => {  
        if (err) response.status(500).send()
        else response.status(200).send(blogs)
        console.log(blogs);
  })
}) 
};