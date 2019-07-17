var mongoose = require("mongoose");
var Schema = mongoose.Schema;

const ProductSchema = new Schema({
  name: String,
  product_id: Number
});

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;
