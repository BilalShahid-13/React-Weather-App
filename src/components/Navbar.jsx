import React, { Component } from "react";
import "../styles/Navbar.css";
import {
  TiHomeOutline,
  MdOutlineDashboard,
  IoSettingsOutline,
  IoIosInformationCircleOutline,
  CiDark,
  MdLightMode,
  IoExitOutline,
  CiMenuBurger,
  IoCloseCircleOutline,
} from "../components/Reacticons";
import { Link } from "react-router-dom";
import { withAuth0 } from "@auth0/auth0-react";
import { Auth0Context } from "@auth0/auth0-react";
import { gsap } from "gsap";

class Navbar extends Component {
  static contextType = Auth0Context;
  constructor(props) {
    super(props);
    this.state = {
      click: false,
      theme: false,
      hover: false,
      selected: "",
      auth: [],
    };
  }

  componentDidMount() {
    // this.handleMouseLeave();
    const theme = localStorage.getItem("dark") === "true";
    if (theme) {
      this.setState({ theme }, () => {
        this.applyTheme();
      });
    }
    // this.Animation();
  }
  componentDidUpdate() {}
  Animation() {
    gsap.from(".right li,#left h3,#left img,.account,.account img", {
      opacity: 0,
      duration: 2,
      top: 0,
      stagger: 0.9,
    });
    gsap.to(".right li,#left h3,#left img,.account,.account img", {
      opacity: 1,
      duration: 2,
      top: 100,
      stagger: 0.9,
    });
  }

  applyTheme() {
    const isDarkModeEnabled = this.state.theme;
    document.body.classList.toggle("dark_mode", isDarkModeEnabled);
    const elementsToToggle = document.querySelectorAll(
      "#right_li, #nest-dropdown-li, .button, nav, #left_h3, .nest-dropdown, #suggestions-li, .outer-suggestions, #search-bar, #city, #date, #circle,#carousel-p,.splash,.right,#options"
    );
    elementsToToggle.forEach((element) => {
      element.classList.toggle("dark_mode", isDarkModeEnabled);
    });
  }

  toggleMode = () => {
    const newTheme = !this.state.theme;
    this.setState({ theme: newTheme }, () => {
      localStorage.setItem("dark", newTheme);
      this.applyTheme();
    });
  };
  onHover = () => {
    this.setState({ hover: true });
    // document.querySelectorAll(".nav-hover").classList.add("toggle");
  };
  handleMouseEnter = (e) => {
    this.setState({ hover: true, linkWidth: "w-full" });
    console.log(e);
  };

  handleMouseLeave = () => {
    this.setState({ hover: false, linkWidth: "w-0" });
  };
  onToggleCategories = () => {
    gsap.to(".upper-right,.right", {
      left: -900,
      duration: 0.5,
    });
  };

  render() {
    const { loginWithRedirect } = this.props.auth0;
    const { user, isAuthenticated, isLoading } = this.context;
    return (
      <main>
        <nav className="">
          <span
            className="menu-icon"
            onClick={() => {
              gsap.to(".upper-right,.right", {
                left: 0,
                duration: 0.2,
                opacity: 1,
              });
            }}
          >
            <CiMenuBurger />
          </span>
          {/* left */}
          <div
            className="flex flex-row justify-center items-center left"
            id="left"
          >
            <h3
              className="font-medium font-serif dark:text-neutral-100"
              id="left_h3"
            >
              WeatherWise
            </h3>
            <img
              src="weather-app.png"
              width={25}
              className="bg-cover ml-4 py-2"
              alt="Weather App"
            />
          </div>
          {/* middle */}
          <div className="upper-right" onClick={this.onToggleCategories}>
            <div className="right">
              <span className="" id="options">
                Options
                <IoCloseCircleOutline onClick={this.onToggleCategories} />
              </span>
              <ul className={`${this.state.theme ? "bg-zinc-800" : ""}`}>
                <li onClick={this.onToggleCategories}>
                  <TiHomeOutline className="icons-size" />

                  <Link
                    to="/"
                    className={`link ${
                      this.state.hover
                        ? "transition-all ease duration-700 no-underline text-[#a855f7] "
                        : ""
                    }`}
                    id="link"
                  >
                    Home
                  </Link>
                </li>

                <li onClick={this.onToggleCategories}>
                  <MdOutlineDashboard className="icons-size" />
                  <Link
                    to="/Dashboard"
                    id="link"
                    className={`link ${
                      this.state.hover
                        ? "transition-all ease duration-700 no-underline text-[#a855f7] "
                        : ""
                    }`}
                  >
                    Dashboard
                  </Link>
                </li>

                <li onClick={this.onToggleCategories}>
                  <IoIosInformationCircleOutline className="icons-size" />
                  <Link
                    to="/Info"
                    id="link"
                    onClick={() => this.setState({ selected: "Info" })}
                    className={`link ${
                      this.state.hover
                        ? "transition-all ease duration-700 no-underline text-[#a855f7] "
                        : ""
                    }`}
                  >
                    Info
                  </Link>
                </li>
              </ul>
              {/* <ul className="flex flex-row gap-6">
              {Navbar_items.map((item, index) => (
                <li key={index}>
                  {item.icon}
                  <Link to={item.path}>{item.text}</Link>
                </li>
              ))}
            </ul> */}
            </div>
          </div>
          {/* right */}
          <div className="account">
            <img
              src={isAuthenticated ? user.picture : `favicon.ico`}
              alt="account-img"
            />
            <div className="dropdown">
              <div></div>
              <ul className="nest-dropdown">
                <img
                  src={`${isAuthenticated ? user.picture : "weather-app.png"}`}
                  alt="account-img"
                />
                <li id="nest-dropdown-li">
                  {isAuthenticated ? user.name : ""}
                </li>
                <li id="nest-dropdown-li">
                  {isAuthenticated ? user.email : ""}
                </li>
                <li
                  onClick={this.toggleMode}
                  className="flex flex-row gap-2 justify-center items-center"
                  id="nest-dropdown-li"
                >
                  {this.state.theme ? <CiDark /> : <MdLightMode />}
                  <span>{this.state.theme ? "Dark Mode" : "Light Mode"}</span>
                </li>
                {isAuthenticated ? (
                  <li className="button" id="nest-dropdown-li">
                    <div>
                      <IoExitOutline />
                      <h6
                        onClick={() => {
                          loginWithRedirect();
                          // this.onLogin();
                        }}
                      >
                        Logout
                      </h6>
                    </div>
                  </li>
                ) : (
                  <li className="button">
                    <div>
                      <IoExitOutline />
                      <h6
                        onClick={() => {
                          loginWithRedirect();
                        }}
                      >
                        Login
                      </h6>
                    </div>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </nav>
      </main>
    );
  }
}

export default withAuth0(Navbar);
