const express=require('express');

const app=express();

app.get('/', function (req, res){

res.send("Hi there, welcome to my great app");

});

app.get('/name/John', function (req, res){

res.send("Hi there, my name is John");

});

app.get('/name/:name', function (req, res){

const name =req.params.name;

res.send("Hi there, my name  " + name);

});

app.get('/repeat/:text/:num', function (req, res){

const num = req.params.num;
const text=req.params.text;

var response = "";



for (var i =0; i<num; i++ ){


//response+= text + ",  ";

if(i<num ){
response+= text + ",  ";


}
else{
response+= text + "  ";



}

}

res.send(response);

});


app.listen(3000);




