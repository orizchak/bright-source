import React, { Component } from "react";
import "./ResourceDetails.css";

class ResourceDetails extends Component {
  state = {};

  render() {
    const { resource } = this.props;

    let content = <div>Please select an item</div>;

    if (resource) {
      content = (
        <div className="container">
          <div className="title">{resource.name}</div>

          <div className="details">
            <div>GENERAL DETAILS</div>
            <label className="label">NAME</label>
            <div className="value">{resource.name}</div>

            <label className="label">DESCRIPTION</label>
            <div className="value">{resource.description}</div>

            <label className="label">RESOURCE TYPE</label>
            <div className="value">{resource.resourceType}</div>

            <label className="label">PATH</label>
            <div className="value">{resource.path}</div>
          </div>
        </div>
      );
    }

    return <div className="resource-details">{content}</div>;
  }
}

export default ResourceDetails;
