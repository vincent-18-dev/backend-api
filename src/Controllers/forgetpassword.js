const express = require("express");
const loginSchema = require("../Models/loginuserModel");
async function forgetPassword(req, res) {
  try {
    const users = await loginSchema.findOne({
      email: req.body.email,
    });
    if (users) {
      await loginSchema.updateOne(
        { email: req.body.email },
        { $set: { password: req.body.confirmpassword } }
      );
      res.json({ message: "password updated!" });
    } else {
      res.json({
        message: "user email id not match",
      });
    }
  } catch (error) {
    console.error(error);
  }
}
const router = express.Router();
router.route("/forget-password").put(forgetPassword);
module.exports = router;
