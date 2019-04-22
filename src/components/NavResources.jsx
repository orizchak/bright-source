import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import arrowRight from "../content/arrow-right.svg";
import activeSign from "../content/active.svg";
import "./NavResources.css";

class NavResources extends Component {
  state = {};

  render() {
    return (
      <div className="nav-resources">
        <div className="title">Items</div>
        <ul className="items">
          {this.props.resources.map(item => (
            <li className={`item ${item.active ? "active" : ""}`} key={item.id}>
              <Link to={`/${item.id}`}>
                <img
                  className="active-sign"
                  src={activeSign}
                  alt="active-sign"
                />

                {item.name}
                <img
                  className="arrow-right"
                  src={arrowRight}
                  alt="arrow-right"
                />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default NavResources;
