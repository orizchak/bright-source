import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="header">
      <Link to="/">Demo App - bright-source</Link>
    </div>
  );
}
