import express from "express";
import dotenv from "dotenv";
import path from "path";
import mongoose from "mongoose";

// Import routes and models
import loginRouter from "./server/routes/login.js";
import connectDB from "./server/config/db.js";
import User from "./server/models/user.js";
import methodOverride from "method-override";
import cors from "cors";
// import userStatsModule from "./server/models/userStats.js";
// const { UserStats, addSampleData } = userStatsModule;
import UserStats from "./server/models/userStats.js";

// Load environment variables
dotenv.config();

// Connect to the database
connectDB();

const app = express();
const PORT = process.env.PORT || 5000;

app.set("view engine", "ejs");

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride("_method"));
app.use(cors());

// Define routes
app.use("/", loginRouter);

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  // addSampleData();
});
