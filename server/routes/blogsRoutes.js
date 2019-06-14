const mongoose = require('mongoose');
const Blogs = mongoose.model('blogs');
module.exports = app => {
    app.get('/api/blogs', (request, response) => {
        Blogs.find({}, (err, blogs) => {  
        if (err) response.status(500).send()
        else response.status(200).send(blogs)
    })
  })

  app.post('/api/blog/edit/:id', (request, response) => {
    console.log(request.body.id);
    Blogs.find({'id':request.body.id}, (err, blogs) => {  
      if (err) response.status(500).send()
      else response.status(200).send(blogs)
      console.log(response.body);
    })
  })

  app.post('/api/blog/submit', (request, response) => {
    var id = 0;
    const {title, content} = request.body.values;
    Blogs.find({}).sort([['id', -1]]).limit(1).exec(function(err, blogs) { 
      id = blogs[0].id + 1;
      const blog = new Blogs({
        id, 
        title,
        content
      });
      try{
        blog.save();
        Blogs.find({}, (err, blogs) => {  
          response.status(200).send(blogs)
        })
        }catch(err) {
          response.status(500).send()
      } 
     });
  })
};
