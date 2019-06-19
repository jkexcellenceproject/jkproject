const mongoose = require('mongoose');
const Blogs = mongoose.model('blogs');

module.exports = app => {

  // Find all for the Blogs page
  app.get('/api/blogs', (request, response) => {
      Blogs.find({}, (err, blogs) => {  
      if (err) response.status(500).send()
      else response.status(200).send(blogs)
      })
  })

  // Find one of the blog on the BlogEdit page
  app.post('/api/blog/edit/:id', (request, response) => {
    Blogs.find({'id':request.body.id}, (err, blogs) => {  
      if (err) response.status(500).send()
      else response.status(200).send(blogs)
    })
  })

  // Add new blog
  app.post('/api/blog/submit', (request, response) => {
    var id = 0;
    const {title, content} = request.body.values;
    Blogs.find({}).sort([['id', -1]]).limit(1).exec(function(err, blogs) { 
      id = blogs[0].id + 1;
      const blog = new Blogs({
        id, 
        title,
        content,
        dateSent: Date.now()
      });
      try{
          blog.save();
          Blogs.find({}, (err, blogs) => {  
              response.status(200).send(blogs)
          })
        } catch(err) {
            response.status(500).send()
        } 
     })
  })
    
  // Update the blog 
  app.post('/api/blog/editSubmit', (request, response) => {
    console.log(request.body.values);
    const {title, content} = request.body.values;
    Blogs.findOneAndUpdate({'id':request.body.id},{'title':title,'content':content}, (err, blogs) => {
      if(err) response.status(500).send()
      else response.status(200).send(blogs)
      console.log(blogs);
    })
   }) 


   // Delete the blog
   app.post('/api/blog/delete', (request, response) => {
     console.log(request.body.id);
     Blogs.deleteOne({'id': request.body.id }, (err, blogs) => {
       if(err) response.status(500).send
       else response.status(200).send(blogs)
     })
   })
}
