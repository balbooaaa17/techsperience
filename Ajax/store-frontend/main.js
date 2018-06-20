$(document).ready(function() {

   // AJAX Request to get all products
   $.ajax({
      url: 'http://localhost:3000/products',
      type: 'GET',
      success: function(products) {
         products.map(obj => {
            $('.products').prepend(`<li class="list-group-item">${obj.product_name} - ${obj.product_description} - $${obj.product_price}</li>`)
         });
      }
   });


   $('#add-product').click(function(e) {
      e.preventDefault();

      // Get the values from the inputs
      let newProduct = {
         productName: $('#name').val(),
         productDescription: $('#description').val(),
         productPrice: $('#price').val()
      }

      // AJAX Request to create new product
      $.ajax({
         url: 'http://localhost:3000/products',
         type: 'POST',
         contentType: 'application/json',
         data: JSON.stringify(newProduct),
         success: function(product) {
            $('.products').prepend(`<li class="list-group-item">${product.product_name} - ${product.product_description} - $${product.product_price}</li>`)
         }
      });

   });


});