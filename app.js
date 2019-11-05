const express = require('express')
const bodyParser = require('body-parser')
const app = express()

//setting view engine
app.set('view engine','ejs');
// middleware
app.use(express.static('./public'));
app.use(bodyParser.urlencoded({extended:false}));

/*
ROUTES
*/
//GET /
 

app.get('/', function (req, res) {
  let weathernow = "The weather in" + Response.body.city + "is 70 C";
  let err = false;
    res.render('home.ejs',{weather:weatherNow, error:err});
});

app.post('/whatever-we-want',function(req,res){
  console.log(req.body.city);
  res.end();
});


app.listen(3000,function(){
console.log('server is live on port: 3000');
});
