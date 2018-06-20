//thirre express-in (not the newspaper, obviously, but the framework)

const express=require('express');

//init app instance

const app = express();

//route

app.get('/', function(req, res){

res.send('Je ne homepage')

});

app.get('/posts/:id', function (req, res) {

//qitu po du me marr qat vlere prej URL

const id=req.params.id;



res.send('posti me numer : ' + id)

});

//handling query string
app.get('/profile', function(req, res){

//po du me mar name prej query stringut

const name = req.query.name;
res.send("EMRI ESHTE : " + name);
});





//run appliation on port 3000

app.listen(3000, function(){

console.log("app running at http://localhost:3000");


});
