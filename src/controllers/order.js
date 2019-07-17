const Order = require("../models/order");
const Product = require("../models/product");

module.exports = {
  getOrder: (req, res) => {
    Order.find({}).then(data => res.send(data));
  },

  addOrder: async (req, res) => {
    const { status, product_id } = req.body;
    await Order.create({
      status,
      product_id
    })
      .then(data =>
        res.status(200).send({
          message: "Created new order success",
          data
        })
      )
      .catch(error =>
        res.status(400).send({
          message: "Created new order was failed",
          error
        })
      );
  },
  getOrderDetails: (req, res) => {
    Order.aggregate([
      {
        $lookup: {
          from: "products",
          localField: "product_id",
          foreignField: "product_id",
          as: "orderdetails"
        }
      }
    ])
      .then(data => {
        res.send(data);
      })
      .catch(error => {
        res.send(error);
      });
  }
};
