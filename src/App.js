import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Resources from "./components/Resources";
import Header from "./components/Header";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Header />
          <Route path={`/:id?`} component={Resources} />
        </Router>
      </div>
    );
  }
}

export default App;
