const mongoose = require('mongoose');
const Articles = mongoose.model('articles');

module.exports = app => {

  // Find all for the Articles page
  app.get('/api/articles', (request, response) => {
    Articles.find({}, (err, articles) => {  
      if (err) response.status(500).send()
      else response.status(200).send(articles)
      })
  })

  // Find one of the Article on the ArticleEdit page
  app.post('/api/article/edit/:id', (request, response) => {
    Articles.find({'id':request.body.id}, (err, articles) => {  
      if (err) response.status(500).send()
      else response.status(200).send(articles)
    })
  })

  // Add new Article
  app.post('/api/article/submit', (request, response) => {
    var id = 0;
    const {title, content} = request.body.values;
    Articles.find({}).sort([['id', -1]]).limit(1).exec(function(err, articles) { 
      if(articles[0].id) {
        id = articles[0].id + 1;
      }
      const article = new Articles({
        id, 
        title,
        content,
        dateSent: Date.now()
      });
      try{
        article.save();
        Articles.find({}, (err, articles) => {  
              response.status(200).send(articles)
          })
        } catch(err) {
            response.status(500).send()
        } 
     })
  })
    
  // Update the Article 
  app.post('/api/article/editSubmit', (request, response) => {
    console.log(request.body.values);
    const {title, content} = request.body.values;
    Articles.findOneAndUpdate({'id':request.body.id},{'title':title,'content':content}, (err, articles) => {
      if(err) response.status(500).send()
      else response.status(200).send(articles)
      console.log(articles);
    })
   }) 


   // Delete the Article
   app.post('/api/article/delete', (request, response) => {
     console.log(request.body.id);
     Articles.deleteOne({'id': request.body.id }, (err, articles) => {
       if(err) response.status(500).send
       else response.status(200).send(articles)
     })
   })
}
