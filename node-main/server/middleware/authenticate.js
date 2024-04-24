// // authenticateUser.js
// import User from "../models/user.js";

// const authenticateUser = async (req, res, next) => {
//   try {
//     const { username, password } = req.body;

//     // Check if username and password are present in the request body
//     if (!username || !password) {
//       return res.status(400).json({
//         message: "Username and password are required for authentication",
//       });
//     }

//     // Find the user in the database
//     const foundUser = await User.findOne({ username, password });

//     // Check if the user exists
//     if (!foundUser) {
//       return res.status(401).json({ message: "Invalid username or password" });
//     }

//     // Set user information on the request object for future routes to access
//     req.user = foundUser;

//     // Pass the ObjectId of the authenticated user to the next middleware or route
//     req.userId = foundUser._id;

//     // Continue to the next middleware or route
//     next();
//   } catch (error) {
//     res.status(500).json({ message: "Internal server error" });
//   }
// };

// export default authenticateUser;

// authenticateUser.js
import User from "../models/user.js";
import bcryptjs from "bcryptjs";

const authenticateUser = async (req, res, next) => {
  try {
    const { username, password } = req.body;

    // Check if username and password are present in the request body
    if (!username || !password) {
      return res.status(400).json({
        message: "Username and password are required for authentication",
      });
    }

    // Find the user in the database by username
    const foundUser = await User.findOne({ username });

    // Check if the user exists
    if (!foundUser) {
      return res.status(401).json({ message: "Invalid username or password" });
    }

    // Compare the provided password with the hashed password stored in the database
    const isPasswordValid = await bcryptjs.compare(
      password,
      foundUser.password
    );

    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid username or password" });
    }

    // Set user information on the request object for future routes to access
    req.user = foundUser;

    // Pass the ObjectId of the authenticated user to the next middleware or route
    req.userId = foundUser._id;

    // Continue to the next middleware or route
    next();
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

export default authenticateUser;
