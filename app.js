const express = require('express')
const app = express()

//setting view engine
app.set('view engine','ejs');
// middleware
app.use(express.static('./public'));

/*
ROUTES
*/
//GET /
 

app.get('/', function (req, res) {
    res.render('home.ejs');
  res.send('Hello World')
})
 
app.listen(3000,function(){
console.log('server is live on port: 3000');
});