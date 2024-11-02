const OrderDetail = require("../models/OrderDetail");
const Order = require("../models/Order");
const CompactDisk = require("../models/CompactDisk");

const orderDetailsController = {
    async createOrderDetail(req, res) {
        try {
            const { orderId, cdId, quantity } = req.body;

            const order = await Order.findByPk(orderId);
            if (!order) {
                return res.status(404).json({ message: "Order not found" });
            }

            const compactDisk = await CompactDisk.findByPk(cdId);
            if (!compactDisk) {
                return res.status(404).json({ message: "CompactDisk not found" });
            }

            const orderDetail = await OrderDetail.create({ orderId, cdId, quantity });
            res.status(201).json(orderDetail);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    },

    async getOrderDetailById(req, res) {
        try {
            const { id } = req.params;
            const orderDetail = await OrderDetail.findByPk(id);
            if (!orderDetail) {
                return res.status(404).json({ message: "OrderDetail not found" });
            }
            res.status(200).json(orderDetail);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },

    async deleteOrderDetail(req, res) {
        try {
            const { id } = req.params;
            const orderDetail = await OrderDetail.findByPk(id);
            if (!orderDetail) {
                return res.status(404).json({ message: "OrderDetail not found" });
            }

            await orderDetail.destroy();
            res.status(200).json({ message: "OrderDetail deleted successfully" });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
};

module.exports = orderDetailsController;
