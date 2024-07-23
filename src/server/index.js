const express = require("express");
const cors = require("cors");
const signin = require("../Controllers/loginuser");
const signup = require("../Controllers/register");
const forgetPassword = require("../Controllers/forgetpassword");
require("../../DB");
const app = express();
// Use CORS middleware
app.use(cors());

app.use(express.json());

app.post("/login", signin);
app.post("/register", async (req, res) => {
  console.log("Received /register request", req.body);
  try {
    const result = await signup(req.body);
    console.log("Registration result:", result);
    res.status(200).json(result);
  } catch (error) {
    console.error("Error during registration:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});
app.put("/forget-password", forgetPassword);
const PORT = process.env.PORT || 3004;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
