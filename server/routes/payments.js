const express = require("express");
const router = express.Router();
const createCheckoutSession = require("../api/checkout");

router.post("/", createCheckoutSession);

module.exports = router;
