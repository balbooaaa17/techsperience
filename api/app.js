// ==== Using packages ====
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const cors=require('cors');


// ==== Getting Product Model(Schema) ====
const Product = require('./models/Product.js');

// ==== Init app ====
const app = express();

app.use(cors());


// ==== Body Parser Middleware ====
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// ==== Connection to MongoDB with Mongoose ====
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/storea', {useMongoClient: true})
  .then(function() {
     console.log('Successfully connected to MongoDB!')
  }).catch(function(err) {
     console.error(err)
  });

// ==== ROUTES ====

/* INDEX */
app.get('/', function(req, res, next) {
   res.send("Welcome to Products API");
});

/* GET ALL PRODUCTS */
app.get('/products', function(req, res) {
   // Code for handling products(data) to be returned as JSON
   
   Product.find(function(err, products) {
   if(err) { 
   res.json(err);
   }
   res.json(products);
   
   });
   
});

/* CREATE PRODUCT */
app.post('/products', function(req, res) {
   // Code for handling create product to DB and return as JSON
   let product = new Product();
   product.product_name = req.body.productName;
   product.product_description = req.body.productDescription;
   product.product_price = req.body.productPrice;
   
   //query to add this new product
   
   Product.create(product, function (err,product){
   if(err) {
   res.json(err);
   }
   res.json(product);
   })
});

/* GET PRODUCT */
app.get('/products/:id', function(req, res) {
   // Code for getting one specific product and return as JSON
   Product.findById(req.params.id, function(err, product){
   if(err){
   res.json(err);
   
   }
   res.json(product);
   
   });
   
});

/* UPDATE PRODUCT */
app.put('/products/:id', function(req, res) {
   // Code for updating one specific product and return as JSON
   let updatedProduct = { 
   product_name : req.body.productName,
   product_description : req.body.productDescription,
   product_price : req.body.productPrice
   }
   
   Product.findOneAndUpdate(
       {_id:req.params.id},
       updatedProduct,
       { new : true},
       function (err, updatedProduct) {
       if(err) {
       res.json(err);
       }
       res.json(updatedProduct);
       
       }
   
   )
   
   
});

/* DELETE PRODUCT */
app.delete('/products/:id', function(req, res) {
   // Code to delete one specific product and return message as JSON
    Product.remove({ _id:req.params.id}, function(err, result){
    if(err){
    
    res.json(err);
    }
    
    res.json({message: "Product succesfully deleted "});
    
    });


});

// ==== Run Application ====
app.listen(3000, () => {
  console.log('Express server is running at http://127.0.0.1:3000');
});