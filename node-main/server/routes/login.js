import express from "express";
import User from "../models/user.js";
import UserStats from "../models/userStats.js"; // Import the UserStats model
import authenticateUser from "../middleware/authenticate.js";
import bcryptjs from "bcryptjs";

const router = express.Router();

router.get("/", (req, res) => {
  res.json({ message: "Welcome to the API" });
});

router.post("/login", authenticateUser, async (req, res) => {
  // Authenticate user and generate token
  try {
    // Your authentication logic here
    res.json({ message: "Login successful", token: "generated_token_here" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.post("/register", async (req, res) => {
  // Create a new user
  const { username, password } = req.body;
  try {
    const hashPassword = await bcryptjs.hash(password, 10);
    const newUser = await User.create({ username, password: hashPassword });
    res
      .status(201)
      .json({ message: "User created successfully", user: newUser });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.post("/stats", async (req, res) => {
  try {
    const { userId, mode, score } = req.body;
    if (!userId) {
      return res.status(400).json({ message: "User ID is required" });
    }

    const userStats = new UserStats({
      user: userId,
      mode,
      score,
    });
    await userStats.save();
    res.status(201).json({ message: "User stats added successfully" });
  } catch (error) {
    console.log("Error: " + error.message);
    res.status(500).json({ error: error.message });
  }
});

export default router;
