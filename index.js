require("dotenv").config();

const express = require("express");
var cors = require("cors");
const app = express();
const bodyParser = require("body-parser");

const db = require("./src/database");
const userRoute = require("./src/routes/user");
const orderRoute = require("./src/routes/order");
const productRoute = require("./src/routes/product");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.use("/user", userRoute);
app.use("/order", orderRoute);
app.use("/product", productRoute);

if (!db) {
  console.log({
    error: error
  });
} else {
  console.log("success connected to db");
}

app.listen(process.env.PORT || 3000, () =>
  console.log(`Example app listening on port ${process.env.PORT || 3000}!`)
);
