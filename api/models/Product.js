var mongoose = require('mongoose');

var ProductSchema = new mongoose.Schema({
  product_name: String,
  product_description: String,
  product_price: Number,
  updated_at: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Product', ProductSchema);
