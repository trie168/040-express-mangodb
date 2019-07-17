const Product = require("../models/product");

module.exports = {
  getProduct: (req, res) => {
    Product.find({}).then(data => res.send(data));
  },

  addProduct: async (req, res) => {
    const { name, product_id } = req.body;
    await Product.create({
      name,
      product_id
    })
      .then(data =>
        res.status(200).send({
          message: "Created new product success",
          data
        })
      )
      .catch(error =>
        res.status(400).send({
          message: "Created new product was failed",
          error
        })
      );
  }
};

// const Product = require('../models/product');

// module.exports = {
//   getProduct: (req, res) => {
//     Product.find({})
//       .then(data => {
//         res.send({
//           message: 'Your List Produck',
//           data
//         });
//       })
//       .catch(error => {
//         res.send({
//           message: 'Ups failed to get your list produck',
//           error
//         });
//       });
//   }
// }
