import React, { Component } from "react";
import "./NavResources.css";
import arrowRight from "../content/arrow-right.svg";
import activeSign from "../content/active.svg";

class NavResources extends Component {
  state = {};

  render() {
    return (
      <div className="nav-resources">
        <div className="title">Items</div>
        <ul className="items">
          {this.props.resources.map(item => (
            <li className="item" key={item.id}>
              <img className="active-sign" src={activeSign} alt="active-sign" />
              {item.name}
              <img className="arrow-right" src={arrowRight} alt="arrow-right" />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default NavResources;
