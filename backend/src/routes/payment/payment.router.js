const express = require("express");
const { handlePayment } = require("./payment.controller");

const paymentRouter = express.Router();

paymentRouter.post("/", handlePayment);

module.exports = paymentRouter;
