const express = require("express");
const loginSchema = require("../Models/loginuserModel");

async function handleSignUp(req, res, next) {
  console.log("Received /register request", req.body);
  try {
    const users = await loginSchema.findOne({ email: req.body.email });
    if (users) {
      res.json({ message: "User already has an account" });
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
    console.error("Error during registration:", error);
    next(error);
  }
}

const router = express.Router();
router.route("/register").post(handleSignUp);

module.exports = router;
