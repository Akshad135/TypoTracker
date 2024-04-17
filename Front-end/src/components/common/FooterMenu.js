import React from "react";
import { Grid, AppBar } from "@mui/material";
import { Box } from "@mui/system";
import { Tooltip } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import SelfImprovementIcon from "@mui/icons-material/SelfImprovement";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import Select from "../utils/Select";
import PersonIcon from "@mui/icons-material/Person";
import {
  FOCUS_MODE,
  FREE_MODE,
  WORD_MODE_LABEL,
  SENTENCE_MODE_LABEL,
  GAME_MODE_DEFAULT,
  GAME_MODE_SENTENCE,
  TRAINER_MODE,
  LOGIN_SIGNUP_LABEL,
} from "../../constants/Constants";
import KeyboardAltOutlinedIcon from "@mui/icons-material/KeyboardAltOutlined";
import EmojiFoodBeverageIcon from "@mui/icons-material/EmojiFoodBeverage";
import Login from "./Login"; // Import the Login component

const FooterMenu = ({
  themesOptions,
  theme,
  soundMode,
  toggleSoundMode,
  soundOptions,
  soundType,
  handleSoundTypeChange,
  handleThemeChange,
  toggleFocusedMode,
  toggleCoffeeMode,
  isFocusedMode,
  isCoffeeMode,
  gameMode,
  handleGameModeChange,
  isTrainerMode,
  toggleTrainerMode,
  toggleLoginPage,
  isLoginPage,
}) => {
  const isTypeTestEnabled = !isCoffeeMode && !isTrainerMode;

  const getModeButtonClassName = (mode) => {
    if (mode) {
      return "zen-button";
    }
    return "zen-button-deactive";
  };

  const getGameModeButtonClassName = (currMode, buttonMode) => {
    if (currMode === buttonMode) {
      return "active-game-mode-button";
    }
    return "inactive-game-mode-button";
  };

  return (
    <AppBar position="static" color="transparent" className="bottomBar">
      <Grid container justifyContent="space-between" alignItems="center">
        <Box display="flex" flexDirection="row">
          <Select
            classNamePrefix="Select"
            value={themesOptions.find((e) => e.value.label === theme.label)}
            options={themesOptions}
            isSearchable={false}
            isSelected={false}
            onChange={handleThemeChange}
            menuPlacement="top"
          ></Select>
          <IconButton onClick={toggleLoginPage}>
            {" "}
            {/* Add onClick handler */}
            <Tooltip
              title={
                <span style={{ whiteSpace: "pre-line" }}>
                  {LOGIN_SIGNUP_LABEL}
                </span>
              }
            >
              <span className={getModeButtonClassName(isLoginPage)}>
                <PersonIcon fontSize="medium"></PersonIcon>
              </span>
            </Tooltip>
          </IconButton>
          <IconButton onClick={toggleFocusedMode}>
            <Tooltip title={FOCUS_MODE}>
              <span className={getModeButtonClassName(isFocusedMode)}>
                <SelfImprovementIcon fontSize="medium"></SelfImprovementIcon>
              </span>
            </Tooltip>
          </IconButton>
          <IconButton onClick={toggleSoundMode}>
            <Tooltip title="Sound Mode Tooltip">
              <span className={getModeButtonClassName(soundMode)}>
                <VolumeUpIcon fontSize="medium"></VolumeUpIcon>
              </span>
            </Tooltip>
          </IconButton>
          {soundMode && (
            <Select
              classNamePrefix="Select"
              value={soundOptions.find((e) => e.label === soundType)}
              options={soundOptions}
              isSearchable={false}
              isSelected={false}
              onChange={handleSoundTypeChange}
              menuPlacement="top"
            ></Select>
          )}
          <IconButton onClick={toggleCoffeeMode}>
            <Tooltip
              title={
                <span style={{ whiteSpace: "pre-line" }}>{FREE_MODE}</span>
              }
            >
              <span className={getModeButtonClassName(isCoffeeMode)}>
                <EmojiFoodBeverageIcon fontSize="medium"></EmojiFoodBeverageIcon>
              </span>
            </Tooltip>
          </IconButton>
          <IconButton onClick={toggleTrainerMode}>
            <Tooltip title={TRAINER_MODE}>
              <span className={getModeButtonClassName(isTrainerMode)}>
                <KeyboardAltOutlinedIcon fontSize="medium"></KeyboardAltOutlinedIcon>
              </span>
            </Tooltip>
          </IconButton>
          {isTypeTestEnabled && (
            <>
              <IconButton
                onClick={() => {
                  handleGameModeChange(GAME_MODE_DEFAULT);
                }}
              >
                <span
                  className={getGameModeButtonClassName(
                    gameMode,
                    GAME_MODE_DEFAULT
                  )}
                >
                  {WORD_MODE_LABEL}
                </span>
              </IconButton>
              <IconButton
                onClick={() => {
                  handleGameModeChange(GAME_MODE_SENTENCE);
                }}
              >
                <span
                  className={getGameModeButtonClassName(
                    gameMode,
                    GAME_MODE_SENTENCE
                  )}
                >
                  {SENTENCE_MODE_LABEL}
                </span>
              </IconButton>
            </>
          )}
        </Box>
      </Grid>
      {/* If isLoginPage is true, render the Login component */}
      {isLoginPage && <Login selectedTheme={theme} />}
    </AppBar>
  );
};

export default FooterMenu;
