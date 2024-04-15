// import React, { useState } from "react";
// import { TextField, Button, Typography } from "@mui/material";

// const Login = () => {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [isLogin, setIsLogin] = useState(true);

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const userData = {
//       username,
//       password,
//     };

//     try {
//       let response;
//       if (isLogin) {
//         // Logic for login
//         response = await fetch("YOUR_LOGIN_API_ENDPOINT", {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify(userData),
//         });
//       } else {
//         // Logic for signup
//         response = await fetch("YOUR_SIGNUP_API_ENDPOINT", {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify(userData),
//         });
//       }

//       // Check if request was successful
//       if (response.ok) {
//         const data = await response.json();
//         // Handle success response from backend
//         console.log(data);
//       } else {
//         // Handle error response from backend
//         console.error("Error:", response.statusText);
//       }
//     } catch (error) {
//       console.error("Error:", error);
//     }
//   };

//   return (
//     <div className="login-container">
//       <Typography variant="h4">{isLogin ? "Login" : "Sign Up"}</Typography>
//       <form onSubmit={handleSubmit}>
//         <TextField
//           label="Username"
//           value={username}
//           onChange={(e) => setUsername(e.target.value)}
//           fullWidth
//           margin="normal"
//           variant="outlined"
//         />
//         <TextField
//           label="Password"
//           type="password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           fullWidth
//           margin="normal"
//           variant="outlined"
//         />
//         <Button variant="contained" type="submit" color="primary">
//           {isLogin ? "Login" : "Sign Up"}
//         </Button>
//       </form>
//       <Typography variant="body1">
//         {isLogin ? "Don't have an account? " : "Already have an account? "}
//         <span className="toggle-link" onClick={() => setIsLogin(!isLogin)}>
//           {isLogin ? "Sign up" : "Login"}
//         </span>
//       </Typography>
//     </div>
//   );
// };

// export default Login;

import React, { useState } from "react";
import { TextField, Button, Typography } from "@mui/material";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin, setIsLogin] = useState(true);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userData = {
      username,
      password,
    };

    try {
      let response;
      if (isLogin) {
        // Fetch login endpoint from environment variable
        response = await fetch(process.env.REACT_APP_LOGIN_ENDPOINT, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userData),
        });
      } else {
        // Fetch signup endpoint from environment variable
        response = await fetch(process.env.REACT_APP_SIGNUP_ENDPOINT, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userData),
        });
      }

      // Check if request was successful
      if (response.ok) {
        const data = await response.json();
        // Handle success response from backend
        console.log(data);
      } else {
        // Handle error response from backend
        console.error("Error:", response.statusText);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="login-container">
      <Typography variant="h4">{isLogin ? "Login" : "Sign Up"}</Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          fullWidth
          margin="normal"
          variant="outlined"
        />
        <TextField
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          fullWidth
          margin="normal"
          variant="outlined"
        />
        <Button variant="contained" type="submit" color="primary">
          {isLogin ? "Login" : "Sign Up"}
        </Button>
      </form>
      <Typography variant="body1">
        {isLogin ? "Don't have an account? " : "Already have an account? "}
        <span className="toggle-link" onClick={() => setIsLogin(!isLogin)}>
          {isLogin ? "Sign up" : "Login"}
        </span>
      </Typography>
    </div>
  );
};

export default Login;
