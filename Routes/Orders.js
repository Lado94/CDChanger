const express = require("express");
const router = express.Router();
const orderController = require("../controllers/orderController");

router.post("/", orderController.createOrder);
router.get("/", orderController.getAllOrders);
router.get("/:id", orderController.getOrderById);
router.delete("/:id", orderController.deleteOrder);


router.post("/make-order", orderController.makeOrder);
router.get("/userOrders/:userId", orderController.getOrdersForUser);

module.exports = router;
