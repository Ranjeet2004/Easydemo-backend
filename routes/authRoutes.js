const express = require("express");
const router = express.Router();

const {
  registerUser,
  loginUser,
  sendOtp,
  verifyOtp,
  resetPassword,
} = require("../controllers/authController");
router.post("/reset-password", resetPassword);
// router.get("/register", (req, res) => {
//   res.send("Register Route Working");
// });

router.get("/send-otp", (req, res) => {
  res.send("Send OTP Route Working");
});

router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/send-otp", sendOtp);
router.post("/verify-otp", verifyOtp);

module.exports = router;