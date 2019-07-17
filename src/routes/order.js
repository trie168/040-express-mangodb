// const router = require("express").Router();

// const orderController = require("../controllers/order");

// router.get("/", orderController.getOrder);
// router.get("/detail", orderController.getOrderDetails);
// router.post("/", orderController.addOrder);

// module.exports = router;

const router = require('express').Router();
const orderController = require('../controllers/order');

router.get('/', orderController.getOrder);
router.post('/', orderController.addOrder);
router.get('/detail', orderController.getOrderDetails);

module.exports = router;