const express = require("express");
const router = express.Router();
const orderDetailController = require("../controllers/order-details");

router.post("/", orderDetailController.createOrderDetail);
router.get("/:id", orderDetailController.getOrderDetailById);
router.delete("/:id", orderDetailController.deleteOrderDetail);

module.exports = router;
