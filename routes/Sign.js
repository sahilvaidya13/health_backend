const express = require("express");
const router = express.Router();
const {
  login,
  register,
  getqr,
  view,
  hospfetch,
  getusers,
} = require("../controllers/signController");

// router.post("/in", signin);
// router.post("/up", signup);
router.post("/login", login);
router.post("/signin", register);
router.get("/qrcode", getqr);
router.get("/fetchqr", hospfetch);
router.get("/getusers", getusers);
module.exports = router;
