const express = require("express");
const router = express.Router();

router.get("/", (req, res) => res.send("About this App!"));
router.get("/me", (req, res) => res.send("About Me!"));

module.exports = router;