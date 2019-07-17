const router = require("express").Router();

const userController = require("../controllers/user");

router.get("/", userController.getAllUser);
router.post("/", userController.addUser);
// Export API routes
module.exports = router;
