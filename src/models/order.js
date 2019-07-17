var mongoose = require("mongoose");
var Schema = mongoose.Schema;

const OrderSchema = new Schema({
  status: Number,
  product_id: Number
});

const Order = mongoose.model("Order", OrderSchema);

module.exports = Order;
