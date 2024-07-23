const express = require("express");
const loginSchema = require("../Models/loginuserModel");
async function handleSignIn(req, res) {
  try {
    const users = await loginSchema.findOne({
      email: req.body.email,
      password: req.body.password,
    });
    if (users) {
      res.json({ message: "User Logged In" });
      console.log("User Logged In");
    } else {
      res.json({ message: "User Not found" });
      console.log("User Not found ");
    }
  } catch (error) {
    console.error(error);
  }
}
const router = express.Router();
router.route("/login").post(handleSignIn);

module.exports = router;
