import React, { Component } from "react";
import Header from "./components/Header";
import NavResources from "./components/NavResources";
import "./App.css";

class App extends Component {
  state = {
    data: {
      resources: [],
      actions: []
    }
  };
  componentDidMount() {
    fetch("/data.json")
      .then(res => res.json())
      .then(data => {
        this.setState({ data });
        console.log(data);
      })
      .catch(err => {
        console.error(err);
      });
  }

  render() {
    const data = this.state.data;

    return (
      <div className="App">
        <Header />
        <NavResources resources={data.resources} />
      </div>
    );
  }
}

export default App;
