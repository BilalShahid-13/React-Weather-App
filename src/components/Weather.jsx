import React, { Component } from "react";
import { IoLocationOutline } from "react-icons/io5";
import { MdDateRange } from "react-icons/md";
import { DateTime, Value } from "../constants/items";
import "../styles/Weather.css";
import Cards from "./Cards";
import axios from "axios";
import Loader from "../Loaders/Loader";
import Loader_ms from "../Loaders/Loader_ms";
import { gsap } from "gsap";
import { FaAngleRight } from "react-icons/fa";
import { FaAngleLeft } from "react-icons/fa";
export class Weather extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
      data: "",
      main: "",
      icon: "01d",
      loading: true,
      isFarheneit: false,
      api: [],
    };
  }

  componentDidMount() {
    this.fetchData();
    const value = localStorage.getItem("input-val");
    const isfarenheit = localStorage.getItem("isFahrenheit");
    if (this.state.input !== value && this.state.isFarheneit !== isfarenheit) {
      this.setState({ input: value });
      this.setState({ isFarheneit: isfarenheit });
    }
    gsap.to("#city,h3,img", {
      // opacity: 0,
      left: -100,
      duration: 0.7,
      stagger: 0.3,
    });
    gsap.from("#city,h3,img", {
      // opacity: 1,
      left: 0,
      duration: 0.7,
      stagger: 0.3,
    });
  }
  componentDidUpdate() {
    this.fetchData();
    const value = localStorage.getItem("input-val");
    const toggle = localStorage.getItem("isFahrenheit");
    if (this.state.input !== value && this.state.isFarheneit !== toggle) {
      this.setState({ input: value });
      this.setState({ isFarheneit: toggle });
    }
  }

  fetchData = async () => {
    const { input, isFarheneit } = this.props;
    const apiKey = "781f54e1a024eb252acbd5935a250c48";
    const api = `http://api.openweathermap.org/data/2.5/weather?q=${
      this.state.input || input
    }&appid=${apiKey}&units=metric`;

    try {
      const response = await axios.get(api);
      if (response.status !== 200) {
        throw new Error(
          `Axios error: ${response.status} - ${response.statusText}`
        );
      }
      const jsonData = response.data;
      this.setState({
        data: jsonData,
        main: jsonData.main,
        icon: jsonData.weather[0].icon,
      });
      this.setState({ loading: false });
      localStorage.setItem("today", JSON.stringify(jsonData));
    } catch (error) {
      console.error("Axios error:", error);
    }
  };

  formatDayAndMonth = (dateString) => {
    const date = new Date(dateString);
    const month = this.months[date.getMonth()];
    const day = date.getDate();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    return `${month} ${day}, ${date.getFullYear()} ${hours}:${minutes}:${seconds}`;
  };

  months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  render() {
    return (
      <>
        {/* head */}
        <main
          className="flex flex-col bg-purple-300 rounded-lg pt-2
         space-y-2"
        >
          {/* city */}
          <div className="flex flex-row justify-center items-center gap-1 citi">
            <IoLocationOutline id="city" />
            <h3 id="city">{this.state.data.name}</h3>
          </div>
          {/* date */}
          <div className="flex flex-row justify-center items-center gap-1">
            <MdDateRange id="date" />
            <h3 id="date">
              <DateTime />
            </h3>
          </div>
          {/* img */}
          <div className="flex flex-col justify-center items-center relative">
            {this.state.loading ? (
              <Loader />
            ) : (
              <img
                src={`weather_icons/${this.state.icon}.png`}
                alt=""
                className="drop-shadow-md"
              />
            )}
            <div id="circle">
              {this.state.loading ? <Loader_ms /> : `${this.state.main.temp}°C`}
            </div>
          </div>
        </main>
        <Cards main={this.state.main} data={this.state.data} />
      </>
    );
  }
}

export default Weather;
