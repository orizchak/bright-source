import React, { Component } from "react";
import "./ResourceDetails.css";
import help from "../content/help-12.svg";

class ResourceDetails extends Component {
  state = {};

  render() {
    const { resource, actions } = this.props;

    let content = <div>Please select an item</div>;

    if (resource) {
      content = (
        <div className="container">
          <div className="title">{resource.name}</div>

          <div className="details">
            <div className="section">
              <div className="sub-title">
                GENERAL DETAILS
                <img src={help} alt="help" title="GENERAL DETAILS" />
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
                <img
                  src={help}
                  alt="PERMITED ACTIONS"
                  title="PERMITED ACTIONS"
                />
              </div>
              <div className="actions">
                {actions.map(action => (
                  <div className="action" key={action.id}>
                    {action.name}
                  </div>
                ))}
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
