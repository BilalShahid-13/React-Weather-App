import React, { Component } from "react";
import "../styles/Selector.css";
import Selector_items from "../constants/items";
import { Link } from "react-router-dom";

export default class Selector extends Component {
  constructor(props) {
    super(props);
    this.state = {
      click: false,
      clickedItem: "",
      active: false,
    };
  }

  handleClick = (e, index) => {
    if (index === 0) {
      localStorage.setItem("Selector", "Today");
    } else {
      localStorage.setItem("Selector", "Week");
    }
    const text = e.target.innerText;
    this.setState({ clickedItem: text }); // Update clickedItem in state with the clicked item's text
    console.log(index);
  };

  onSelector_Click = (e) => {
    const id = e.target.id;
    if (id === "today") {
      this.setState({ active: "today" });
    } else if (id === "week") {
      this.setState({ active: "week" });
    }
  };

  render() {
    return (
      <>
        <div className="selector">
          <Link
            onClick={this.onSelector_Click}
            id="today"
            className={`${
              this.state.active === "today" ? "bg-purple-500" : ""
            }`}
          >
            Today
          </Link>
          <Link
            onClick={this.onSelector_Click}
            id="week"
            className={`${this.state.active === "week" ? "bg-purple-500" : ""}`}
          >
            5 Days
          </Link>
        </div>
      </>
    );
  }
}
