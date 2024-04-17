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
    },
    toggleLink: {
      color: currentTheme.title,
      cursor: "pointer",
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
        console.log(data);
      } else {
        // Handle error response from backend
        console.error("Error:", response.statusText);
      }
    } catch (error) {
      console.log("Error:", error);
    }
  };

  return (
    <div style={styles.loginContainer}>
      <Typography variant="h4">{isLogin ? "Login" : "Sign Up"}</Typography>
      <form onSubmit={handleSubmit}>
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
      <Typography variant="body1">
        {isLogin ? "Don't have an account? " : "Already have an account? "}
        <span style={styles.toggleLink} onClick={() => setIsLogin(!isLogin)}>
          {isLogin ? "Sign up" : "Login"}
        </span>
      </Typography>
    </div>
  );
};

export default Login;
