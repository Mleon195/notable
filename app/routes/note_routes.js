module.exports = function(app, db){
  app.post('/notes', function(req, res){
    //create the note here
    console.log(req.body);

    res.send('Hello');
  });
};
