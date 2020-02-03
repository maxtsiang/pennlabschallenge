import React, { Component } from "react";
import "./App.css";

import Home from "./components/Home";

import { BrowserRouter, Route } from "react-router-dom";

import { ThemeProvider, createMuiTheme } from "@material-ui/core";

const theme = createMuiTheme({
  palette: {},
  typography: {
    fontFamily: "Lato",
    title: {
      fontWeight: "black"
    },
    h3: {
      fontWeight: "black"
    },
    h4: {
      fontSize: 45,
      fontWeight: "black",
      color: "lightgrey"
    },
    h5: {
      fontWeight: "bold"
    },
    h6: {
      fontSize: 21
    }
  }
});

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Route exact path="/" component={() => <Home />} />
          <Route
            exact
            path="/cart"
            component={() => <Home isCartPage={true} />}
          />
        </BrowserRouter>
      </ThemeProvider>
    );
  }
}

export default App;
