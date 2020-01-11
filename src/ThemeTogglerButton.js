import React from "react";
import { ThemeContext } from "./ThemeContext";

const ThemeTogglerButton = props => {
  return (
    <ThemeContext.Consumer>
      {({ theme, toggleTheme }) => {
        return (
          <button
            onClick={toggleTheme}
            style={{ backgroundColor: theme.background }}
          >
            Toggle Theme
          </button>
        );
      }}
    </ThemeContext.Consumer>
  );
};

export default ThemeTogglerButton;
