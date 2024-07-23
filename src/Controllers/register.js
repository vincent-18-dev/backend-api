const express = require("express");
const loginSchema = require("../Models/loginuserModel");
async function handleSignUp(req, res) {
  try {
    const users = await loginSchema.findOne({
      email: req.body.email,
    });
    if (users) {
      res.json({ message: "User already have an account" });
    } else {
      const newUser = new loginSchema({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
        phone: req.body.phone,
      });
      await newUser.save();
      res.json({ message: "User profile created" });
    }
  } catch (error) {
    console.error(error);
  }
}
const router = express.Router();
router.route("/register").post(handleSignUp);
module.exports = router;
