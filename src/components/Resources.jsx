import React, { Component } from "react";
import NavResources from "./NavResources";
import ResourceDetails from "./ResourceDetails";

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

    this.setState({ resources });
  }

  render() {
    const { resources, actions } = this.state;
    const activeResource = resources.filter(r => r.active)[0];
    let resourceActions = [];

    if (activeResource) {
      resourceActions = activeResource.actionIds
        .map(id => actions[id])
        .filter(a => a);
    }

    return (
      <React.Fragment>
        <NavResources resources={resources} />
        <ResourceDetails resource={activeResource} actions={resourceActions} />
      </React.Fragment>
    );
  }
}

export default Resources;
