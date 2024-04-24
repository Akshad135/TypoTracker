import React, { useState } from "react";
import { TextField, Button, Typography } from "@mui/material";
import {
  lightTheme,
  darkTheme,
  cyberTheme,
  terminalTheme,
  nintendoTheme,
  defaultTheme,
} from "../../style/theme";

const Login = ({ selectedTheme }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin, setIsLogin] = useState(true);
  const [message, setMessage] = useState("");

  // Set the current theme to the selected theme passed from FooterMenu
  const currentTheme = selectedTheme || defaultTheme;

  // Define styles based on the current theme
  const styles = {
    loginContainer: {
      backgroundColor: currentTheme.background,
      color: currentTheme.text,
      fontFamily: currentTheme.fontFamily,
      padding: "20px",
      borderRadius: "5px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      height: "calc(100vh - 120px)", // Adjusted height to consider footer and a little buffer
      maxWidth: "400px", // Limiting max width to prevent overflow
      margin: "0 auto", // Center horizontally
    },
    textField: {
      backgroundColor: currentTheme.background,
      marginBottom: "20px",
      borderColor: currentTheme.textTypeBox,
    },
    label: {
      color: currentTheme.textTypeBox,
    },
    formLabelFocused: {
      color: currentTheme.title,
    },
    button: {
      background: currentTheme.gradient,
      marginTop: "20px", // Add some space between button and inputs
    },
    toggleLink: {
      color: currentTheme.title,
      cursor: "pointer",
    },
    signUpText: {
      marginTop: "20px", // Add margin to separate from the button
    },
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userData = {
      username,
      password,
    };

    try {
      let response;
      if (isLogin) {
        // Logic for login
        response = await fetch("http://localhost:5000/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userData),
        });
      } else {
        // Logic for signup
        response = await fetch("http://localhost:5000/register", {
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
        setMessage(
          isLogin ? "User logged in successfully" : "User created successfully"
        );
        setUsername(""); // Clear username field
        setPassword(""); // Clear password field
        console.log(data);
      } else {
        // Handle error response from backend
        if (response.status === 401) {
          setMessage("Incorrect username or password");
        } else if (response.status === 409 && !isLogin) {
          setMessage("User already exists");
        } else {
          setMessage("Something went wrong. Please try again later.");
        }
        console.error("Error:", response.statusText);
      }
    } catch (error) {
      setMessage("Something went wrong. Please try again later.");
      console.error("Error:", error);
    }
  };

  return (
    <div style={styles.loginContainer}>
      <Typography variant="h4">{isLogin ? "Login" : "Sign Up"}</Typography>
      <form onSubmit={handleSubmit} style={{ width: "100%" }}>
        <TextField
          label="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          fullWidth
          margin="normal"
          variant="outlined"
          style={styles.textField}
          InputLabelProps={{
            style: styles.label,
          }}
          InputProps={{
            style: styles.label,
          }}
        />
        <TextField
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          fullWidth
          margin="normal"
          variant="outlined"
          style={styles.textField}
          InputLabelProps={{
            style: styles.label,
          }}
          InputProps={{
            style: styles.label,
          }}
        />
        <Button
          variant="contained"
          type="submit"
          color="primary"
          style={styles.button}
        >
          {isLogin ? "Login" : "Sign Up"}
        </Button>
      </form>
      {message && (
        <Typography variant="body1" style={{ color: "red", marginTop: "10px" }}>
          {message}
        </Typography>
      )}
      <Typography variant="body1" style={styles.signUpText}>
        {isLogin ? "Don't have an account? " : "Already have an account? "}
        <span style={styles.toggleLink} onClick={() => setIsLogin(!isLogin)}>
          {isLogin ? "Sign up" : "Login"}
        </span>
      </Typography>
    </div>
  );
};

export default Login;

// import React, { useState } from "react";
// import { TextField, Button, Typography } from "@mui/material";
// import {
//   lightTheme,
//   darkTheme,
//   cyberTheme,
//   terminalTheme,
//   nintendoTheme,
//   defaultTheme,
// } from "../../style/theme";

// const Login = ({ selectedTheme }) => {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [isLogin, setIsLogin] = useState(true);
//   const [message, setMessage] = useState("");

//   // Set the current theme to the selected theme passed from FooterMenu
//   const currentTheme = selectedTheme || defaultTheme;

//   // Define styles based on the current theme
//   const styles = {
//     loginContainer: {
//       backgroundColor: currentTheme.background,
//       color: currentTheme.text,
//       fontFamily: currentTheme.fontFamily,
//       padding: "20px",
//       borderRadius: "5px",
//       display: "flex",
//       flexDirection: "column",
//       justifyContent: "center",
//       alignItems: "center",
//       height: "calc(100vh - 120px)", // Adjusted height to consider footer and a little buffer
//       maxWidth: "400px", // Limiting max width to prevent overflow
//       margin: "0 auto", // Center horizontally
//     },
//     textField: {
//       backgroundColor: currentTheme.background,
//       marginBottom: "20px",
//       borderColor: currentTheme.textTypeBox,
//     },
//     label: {
//       color: currentTheme.textTypeBox,
//     },
//     formLabelFocused: {
//       color: currentTheme.title,
//     },
//     button: {
//       background: currentTheme.gradient,
//       marginTop: "20px", // Add some space between button and inputs
//     },
//     toggleLink: {
//       color: currentTheme.title,
//       cursor: "pointer",
//     },
//     signUpText: {
//       marginTop: "20px", // Add margin to separate from the button
//     },
//   };

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
//         response = await fetch("http://localhost:5000/login", {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify(userData),
//         });
//       } else {
//         // Logic for signup
//         response = await fetch("http://localhost:5000/register", {
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
//         setMessage(
//           isLogin ? "User logged in successfully" : "User created successfully"
//         );
//         console.log(data);
//       } else {
//         // Handle error response from backend
//         if (response.status === 401) {
//           setMessage("Incorrect username or password");
//         } else if (response.status === 409 && !isLogin) {
//           setMessage("User already exists");
//         } else {
//           setMessage("Something went wrong. Please try again later.");
//         }
//         console.error("Error:", response.statusText);
//       }
//     } catch (error) {
//       setMessage("Something went wrong. Please try again later.");
//       console.error("Error:", error);
//     }
//   };

//   return (
//     <div style={styles.loginContainer}>
//       <Typography variant="h4">{isLogin ? "Login" : "Sign Up"}</Typography>
//       <form onSubmit={handleSubmit} style={{ width: "100%" }}>
//         <TextField
//           label="Username"
//           value={username}
//           onChange={(e) => setUsername(e.target.value)}
//           fullWidth
//           margin="normal"
//           variant="outlined"
//           style={styles.textField}
//           InputLabelProps={{
//             style: styles.label,
//           }}
//           InputProps={{
//             style: styles.label,
//           }}
//         />
//         <TextField
//           label="Password"
//           type="password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           fullWidth
//           margin="normal"
//           variant="outlined"
//           style={styles.textField}
//           InputLabelProps={{
//             style: styles.label,
//           }}
//           InputProps={{
//             style: styles.label,
//           }}
//         />
//         <Button
//           variant="contained"
//           type="submit"
//           color="primary"
//           style={styles.button}
//         >
//           {isLogin ? "Login" : "Sign Up"}
//         </Button>
//       </form>
//       {message && (
//         <Typography variant="body1" style={{ color: "red", marginTop: "10px" }}>
//           {message}
//         </Typography>
//       )}
//       <Typography variant="body1" style={styles.signUpText}>
//         {isLogin ? "Don't have an account? " : "Already have an account? "}
//         <span style={styles.toggleLink} onClick={() => setIsLogin(!isLogin)}>
//           {isLogin ? "Sign up" : "Login"}
//         </span>
//       </Typography>
//     </div>
//   );
// };

// export default Login;
