import React, { Component } from "react";
import NavResources from "./NavResources";

class Resources extends Component {
  state = {
    resources: [],
    actions: []
  };
  componentDidMount() {
    fetch("/data.json")
      .then(res => res.json())
      .then(data => {
        console.log(data);
        this.setState({ resources: data.resources, actions: data.actions });
        this.setActiveResource();
      })
      .catch(err => {
        console.error(err);
      });
  }

  componentDidUpdate(prevProps) {
    if (this.props.location.pathname !== prevProps.location.pathname) {
      console.log("Route change!");
      this.setActiveResource();
    }
  }

  setActiveResource() {
    const { id } = this.props.match.params;
    const { resources } = this.state;

    resources.forEach(r => {
      r.active = r.id === id;
    });

    // let active = resources.filter(r => r.id === id)[0];

    this.setState({ resources });
  }

  render() {
    const resources = this.state.resources;

    return <NavResources resources={resources} />;
  }
}

export default Resources;
