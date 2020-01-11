import React from "react";
import "./styles.css";
import ThemeTogglerButton from "./ThemeTogglerButton";
import { themes, ThemeContext } from "./ThemeContext";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.toggleTheme = () => {
      this.setState(state => {
        return {
          theme: state.theme === themes.dark ? themes.light : themes.dark
        };
      });
    };
    this.state = {
      theme: themes.light,
      toggleTheme: this.toggleTheme
    };
  }
  render() {
    return (
      <ThemeContext.Provider value={this.state}>
        <Content />
      </ThemeContext.Provider>
    );
  }
}

const Content = () => {
  return (
    <div>
      <ThemeTogglerButton />
    </div>
  );
};

export default App;
