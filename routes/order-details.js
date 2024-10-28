const express = require("express");
const router = express.Router();
const orderDetailsController = require("../controllers/order-details");

router.post("/", orderDetailsController.createOrderDetail);
router.get("/:id", orderDetailsController.getOrderDetailById);
router.delete("/:id", orderDetailsController.deleteOrderDetail);

module.exports = router;
