import React, { Component } from "react";
import "./ResourceDetails.css";
import help from "../content/help-12.svg";

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
            <div className="section">
              <div className="sub-title">
                GENERAL DETAILS
                <img src={help} alt="help" />
              </div>

              <label className="label">NAME</label>
              <div className="value">{resource.name}</div>

              <label className="label">DESCRIPTION</label>
              <div className="value">{resource.description}</div>

              <label className="label">RESOURCE TYPE</label>
              <div className="value">{resource.resourceType}</div>

              <label className="label">PATH</label>
              <div className="value">{resource.path}</div>
            </div>

            <div className="section">
              <div className="sub-title">
                PERMITED ACTIONS
                <img src={help} alt="help" />
              </div>
            </div>
          </div>
        </div>
      );
    }

    return <div className="resource-details">{content}</div>;
  }
}

export default ResourceDetails;
