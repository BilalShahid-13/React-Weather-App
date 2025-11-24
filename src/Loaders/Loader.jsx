import React, { Component } from "react";
import "../styles/Loader.css";
export class Loader extends Component {
  render() {
    return (
      <div class="loader-container">
        <div class="loader"></div>
      </div>
    );
  }
}

export default Loader;
