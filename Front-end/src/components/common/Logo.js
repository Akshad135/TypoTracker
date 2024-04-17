import React from "react";
import KeyboardAltIcon from "@mui/icons-material/KeyboardAlt";

const Logo = ({ isFocusedMode }) => {
  return (
    <div
      className="header"
      style={{ visibility: isFocusedMode ? "hidden" : "visible" }}
    >
      <h1>
        TypoTracker <KeyboardAltIcon fontSize="large" />
      </h1>
      <span className="sub-header">an elegant typing experience</span>
    </div>
  );
};

export default Logo;
