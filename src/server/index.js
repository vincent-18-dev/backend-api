const express = require("express");
const cors = require("cors");
const signin = require("../Controllers/loginuser");
const signup = require("../Controllers/register");
const forgetPassword = require("../Controllers/forgetpassword");
require("../../DB");

const app = express();

// Use CORS middleware with options
app.use(
  cors({
    origin: "https://login-dashboard-front-end.vercel.app", // Replace with your frontend URL
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.use(express.json());

// Correct the order of parameters in the root route
app.get("/", (req, res) => {
  res.json("hello");
});

app.post("/login", signin);
app.post("/register", signup);
app.put("/forget-password", forgetPassword);

const PORT = process.env.PORT || 3004;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
