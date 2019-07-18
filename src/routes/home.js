const router = require("express").Router();
const greet = require("../controllers/home")

router.get("/", greet.greetings);
router.get("/goodbye", greet.sayGoodbye);


module.exports = router