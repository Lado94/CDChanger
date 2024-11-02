const express = require("express");
const router = express.Router();
const ordersController = require("../controllers/orders");

router.post("/", ordersController.createOrder);
router.get("/", ordersController.getAllOrders);
router.get("/:id", ordersController.getOrderById);
router.delete("/:id", ordersController.deleteOrder);
router.get("/user-orders/:userId", ordersController.getOrdersForUser);

module.exports = router;
