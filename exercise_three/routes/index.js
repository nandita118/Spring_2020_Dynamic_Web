const express = require("express");

const router = express.Router();

router.get("/", (req, res) => res.send("Cool Call Back At Root"));

module.exports = router;