import React, { Component } from "react";
import "../styles/Search.css";
import "../styles/Selector.css";
import { Link } from "react-router-dom";

import { IoMdSearch } from "react-icons/io";
import { IoLocationSharp } from "react-icons/io5";
import { IoCloseCircleOutline } from "react-icons/io5";
import Weather from "./Weather";
import Week from "./Week";
import Loader from "../Loaders/Loader";
import Home from "./Home";
import { gsap } from "gsap";

export class Search extends Component {
  static defaultProps = {
    theme: "light",
  };

  constructor(props) {
    super(props);

    this.state = {
      input: "",
      api: "",
      result: [],
      error: null,
      theme: localStorage.getItem("dark"),
      search_data: "",
      search_btn: false,
      active: "",
      selector: "",
      loading: true,
      click: "",
      activeClick: false,
    };
  }
  componentDidMount() {
    // this.Animation()
  }
  Animation() {
    gsap.to(".search input,.search span,.searchbutton", {
      opacity: 1,
      duration: 0.7,
      stagger: 0.6,
      top: 0,
    });
    gsap.from(".search input,.search span,.searchbutton", {
      opacity: 0,
      duration: 0.4,
      stagger: 0.6,
      top: 100,
    });
  }
  getData = async (e) => {
    const value = e.target.value;
    this.setState({ input: value });
    const input = document.querySelector("input").value;
    localStorage.setItem("input", this.state.search_data);
    if (value && input) {
      if (value !== null || value !== "" || input !== null) {
        document.querySelector(".close-icon").classList.add("effect");
      }
      this.setState({ input: value });
      const api = `http://api.openweathermap.org/geo/1.0/direct?q=${value}&limit=5&appid=f800579273ebbc50fe822775d6f2b795`;
      try {
        const response = await fetch(api);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const result_ = await response.json();
        this.setState({ result: result_, error: null });
        this.setState({ search_data: result_, error: null });
        this.setState({ loading: false });
      } catch (error) {
        this.setState({ error: error.message, result: [] });
      }
    } else {
      if (value === null || value === "" || input === "") {
        document.querySelector(".close-icon").classList.remove("effect");
      }
    }
  };
  onClose = () => {
    document.querySelector("input").value = null;
    this.setState({ input: null });
    this.setState({ search_btn: false });
    this.setState({ search_data: false });
  };
  onSearchButton = () => {
    if (this.state.input !== null) {
      this.setState({ search_btn: true });
    }
    // this.setState({ search_btn: false });
  };
  onSelector_Click = (e) => {
    const id = e.target.id;
    if (id === "today") {
      this.setState({ active: "today" });
      localStorage.setItem("active", "today");
      this.setState({ activeClick: true });
    } else if (id === "week") {
      this.setState({ active: "week" });
      this.setState({ selector: "week" });
      localStorage.setItem("active", "week");
    } else if (id === "hourly") {
      this.setState({ activeClick: true });
      this.setState({ active: "hourly" });
      this.setState({ selector: "hourly" });
      localStorage.setItem("active", "hourly");
    }
  };
  Selection = () => {
    const { input, active, loading } = this.state;
    const local_active = localStorage.getItem("active");
    console.log(local_active);
    return (
      <>
        {
          <>
            {active === "today" || local_active == "today" ? (
              <>
                <Weather input={input || localStorage.getItem("input")} />
              </>
            ) : (
              <Week input={input} />
            )}
          </>
        }
      </>
    );
  };

  render() {
    const input = this.state.input || localStorage.getItem("input");
    const active = localStorage.getItem("active");
    return (
      <>
        {/* input */}
        <div className={`search`}>
          <input
            type="search"
            placeholder="Enter City ..."
            onChange={this.getData}
            id="search-bar"
          />
          <span className="close-icon" onClick={this.onClose}>
            <IoCloseCircleOutline />
          </span>
          <div
            className="searchbutton"
            onClick={() => {
              if (this.state.input) {
                this.setState({ search_btn: true });
              }
            }}
          >
            <IoMdSearch className="inner-search-button" />
          </div>
        </div>
        {/* suggestions */}
        {this.state.search_data ? (
          <div>
            {this.state.result.map((item, index) => (
              <div key={index} className="outer-suggestions">
                <ul
                  className="suggestions hover:bg-zinc-300"
                  key={index}
                  id="suggestions"
                  onMouseEnter={() => {
                    const elements = Array.from(
                      document.querySelectorAll("#suggestions-li")
                    );
                    this.setState({
                      search_data: elements[index].textContent,
                    });
                    document.querySelector("input").value =
                      elements[index].textContent;
                  }}
                  onClick={() => {
                    const elements = Array.from(
                      document.querySelectorAll("#suggestions-li")
                    );
                    this.state.input = elements[index].textContent;
                    localStorage.setItem("input-val", this.state.input);
                    this.setState({ search_data: null });
                  }}
                >
                  <IoLocationSharp onClick={this.onClose} />
                  <div>
                    <li id="suggestions-li">{item.name}</li>
                    <li>{item.country}</li>
                  </div>
                </ul>
              </div>
            ))}
          </div>
        ) : (
          ""
        )}
        {/* selector */}
        {this.state.input && this.state.search_btn ? (
          <>
            <div className="selector">
              <Link
                onClick={this.onSelector_Click}
                id="today"
                to={"/today"}
                className={`no-underline text-purple-600 ${
                  this.state.active === "today" || active === "today"
                    ? "bg-purple-500 text-white"
                    : ""
                }`}
              >
                Today
              </Link>
              <Link
                onClick={this.onSelector_Click}
                id="hourly"
                to={"/hourly"}
                className={`no-underline text-purple-600 ${
                  this.state.active === "hourly"
                    ? "bg-purple-500 text-white"
                    : ""
                }`}
              >
                Hourly
              </Link>
              <Link
                onClick={this.onSelector_Click}
                id="week"
                to={"/week"}
                className={`no-underline text-purple-600 ${
                  this.state.active === "week" ? "bg-purple-500 text-white" : ""
                }`}
              >
                5 Days
              </Link>
            </div>
            {/* {this.Selection()} */}
          </>
        ) : (
          ""
          // <Home />
        )}

        {/* {this.state.activeClick ? (
          <>
            {this.Selection()}
            {this.state.input ? (
              <div className="selector">
                <Link
                  onClick={this.onSelector_Click}
                  id="today"
                  // to={"/today"}
                  className={`no-underline text-purple-600 ${
                    this.state.active === "today"
                      ? "bg-purple-500 text-white"
                      : ""
                  }`}
                >
                  Today
                </Link>
                <Link
                  onClick={this.onSelector_Click}
                  id="week"
                  // to="/week"
                  className={`no-underline text-purple-600 ${
                    this.state.active === "week"
                      ? "bg-purple-500 text-white"
                      : ""
                  }`}
                >
                  5 Days
                </Link>
              </div>
            ) : null}
          </>
        ) : this.state.input ? (
          <div className="selector">
            <Link
              onClick={this.onSelector_Click}
              id="today"
              // to={"/today"}
              className={`no-underline text-purple-600 ${
                this.state.active === "today" ? "bg-purple-500 text-white" : ""
              }`}
            >
              Today
            </Link>
            <Link
              onClick={this.onSelector_Click}
              id="week"
              // to="/week"
              className={`no-underline text-purple-600 ${
                this.state.active === "week" ? "bg-purple-500 text-white" : ""
              }`}
            >
              5 Days
            </Link>
          </div>
        ) : (
          <h2>asdfg</h2>
        )} */}

        {/* {this.state.input ? this.Selection() : ""} */}
        {/* {this.state.search_btn ? <Weather input={this.state.input} /> : ""} */}
      </>
    );
  }
}

export default Search;
