import React from "react";
import { hot } from "react-hot-loader/root";
import { BrowserRouter as Router } from "react-router-dom";
import "src/config/reactHotLoader"; // tslint:disable-line no-import-side-effect
import { LocaleContextProvider } from "src/contexts/LocaleContext";
import { ThemeContextProvider } from "src/contexts/ThemeContext";
import Body from "src/layouts/Body";
import CommonProvider from "./CommonProvider";

class App extends React.Component {
  public render() {
    return (
      <Router>
        <LocaleContextProvider>
          <ThemeContextProvider>
            <CommonProvider>
              <Body />
            </CommonProvider>
          </ThemeContextProvider>
        </LocaleContextProvider>
      </Router>
    );
  }
}

export default hot(App);
