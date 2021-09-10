const express = require('express');
const bodyParser = require('body-parser');
const { Z_DEFAULT_STRATEGY } = require('zlib');
const { render } = require('ejs');
const date = require(__dirname+ '/date.js');

const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs');
app.use(express.static("public"));

var items = ['Buy Food', 'Cook Food', 'Eat Food'];
var workItems = ['Test1', 'Test2'];
var hobbies = [];






app.get('/', function(req, res){

  var day = date.getDate();
    

    res.render('list', {newListItem: day, newItem: items});
})

app.post('/', function(req, res){

  var item = (req.body.todo);
  console.log(item);
  if (req.body.list === "Work List"){
    workItems.push(item);
    res.redirect('/work')
  }else if (req.body.list === "My Hobbies"){
    hobbies.push(item);
    res.redirect('/hobby');

  }else {
    items.push(item); 
    res.redirect('/');
  }
 
  
  
})

app.get('/work', function(req, res){
  res.render('list', {newListItem: "Work List", newItem: workItems});

})

app.get('/hobby', function(req, res){
  res.render('list', {newListItem: "My Hobbies", newItem: hobbies})
})



app.listen(3000, function(){
  console.log('Server is running on port 3000');
})
