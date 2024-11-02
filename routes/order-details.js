const express = require("express");
const router = express.Router();
const orderDetailsController = require("../controllers/order-details");

router.post("/", (req, res) => orderDetailsController.createOrderDetail(req, res));
router.get("/:id", (req, res) => orderDetailsController.getOrderDetailById(req, res));
router.delete("/:id", (req, res) => orderDetailsController.deleteOrderDetail(req, res));

module.exports = router;
