import React, { Component } from "react";

export class Settings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false,
      isFahrenheit: false,
    };
  }
  componentDidMount() {}
  componentDidUpdate() {
    console.log("isfarenheit", this.state.isFahrenheit);
  }

  handleChange = () => {
    if (this.state.isFahrenheit) {
      this.setState({ isFahrenheit: false });
      localStorage.setItem("isFahrenheit", false);
    } else {
      this.setState({ isFahrenheit: true });
      localStorage.setItem("isFahrenheit", true);
    }
  };

  toggleSwitch = () => {
    const toggle = document.querySelector("#flexSwitchCheckDefault").checked;
    const toggle_mem = localStorage.getItem("isFahrenheit");
    if (toggle) {
      this.setState({ isFahrenheit: false });
      localStorage.setItem("isFahrenheit", true);
    }
    {
      this.setState({ isFahrenheit: true });
      localStorage.setItem("isFahrenheit", false);
    }
    console.log("switch", toggle_mem);
    console.log("switch 12", toggle);
  };

  // getMode = () => {
  //   const switchCheckbox = document.querySelector("#flexSwitchCheckDefault");
  //   console.log("chec", localStorage.getItem("isFahrenheit"));
  //   if (switchCheckbox) {
  //     // Check if the theme preference is already set in localStorage
  //     const isFahrenheit = localStorage.getItem("isFahrenheit");

  //     // Set the initial theme based on localStorage
  //     if (isFahrenheit === true) {
  //       switchCheckbox.checked = true;

  //       switchCheckbox.addEventListener("change", (event) => {
  //         const isChecked = event.target.checked;
  //       });
  //     }
  //   } else {
  //     console.error('HTML element with ID "flexSwitchCheckDefault" not found.');
  //   }
  // };
  render() {
    return (
      <>
        <div className="flex flex-row justify-content-center">
          <div className="col-auto">
            <label
              className="form-check-label"
              htmlFor="flexSwitchCheckDefault"
            >
              Celsius
            </label>
          </div>
          <div className="form-check form-switch ">
            <input
              class="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
              checked={this.state.isFahrenheit}
              onChange={this.handleChange}
            />
          </div>
          <div className="col-auto">
            <label
              className="form-check-label"
              htmlFor="flexSwitchCheckDefault"
            >
              Fahrenheit
            </label>
          </div>
        </div>
      </>
    );
  }
}

export default Settings;
