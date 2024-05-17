import React, { Component } from "react";
import axios from "axios";
import "../styles/Cards.css";
import Loader_ms from "../Loaders/Loader_ms";
import Loader from "../Loaders/Loader";
import { gsap } from "gsap";

export class Hourly extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
      data: "",
      main: "",
      data: [],
      Date: [],
      daysDifference: "",
      loading: true,
      // icon: "",
    };
  }
  componentDidMount() {
    this.fetchData();
    gsap.from(".hourly-card,.hourly-card img,.hourly-card h3", {
      opacity: 0,
      duration: 0.8,
      top: -100,
      // stagger: 0.2,
    });
    gsap.to(".hourly-card,.hourly-card img,.hourly-card h3", {
      opacity: 1,
      duration: 0.8,
      top: 0,
      // stagger: 0.2,
    });
  }

  fetchData = async () => {
    const { input } = this.props;
    const apiKey = "781f54e1a024eb252acbd5935a250c48";
    const apiUrl = `http://api.openweathermap.org/data/2.5/forecast?q=${
      this.state.input || input
    }&appid=${apiKey}&units=metric`;

    try {
      const response = await axios.get(apiUrl);
      if (response.status !== 200) {
        throw new Error(
          `Axios error: ${response.status} - ${response.statusText}`
        );
      }

      const jsonData = response.data.list;
      const currentDate = new Date();

      // Filter the data for the next 24 hours
      const nextDayForecast = jsonData.filter((data) => {
        const forecastDate = new Date(data.dt_txt);
        const hoursDifference = Math.floor(
          (forecastDate - currentDate) / (1000 * 3600)
        );
        return hoursDifference >= 0 && hoursDifference < 24;
      });

      this.setState({
        data: nextDayForecast,
        nextDayHourly: nextDayForecast,
        loading: false,
      });
      console.log("next day", nextDayForecast);
      localStorage.setItem("hourly", JSON.stringify(nextDayForecast));
      localStorage.setItem("nextDayHourly", JSON.stringify(nextDayForecast));
    } catch (error) {
      console.error("Axios error:", error);
      this.setState({
        error: error.message,
        loading: false,
      });
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
    const { loading, data, error } = this.state;
    return (
      <>
        <div className="flex justify-center items-center flex-col">
          <h2 className=" font-semibold text-2xl mt-2">Hourly Forecast</h2>
          {loading ? (
            <Loader />
          ) : (
            <div className="space-y-4">
              <h3 className="px-4 text-lg font-medium">Hourly Forecast</h3>
              <div className="scrollbar">
                <div className="card-container">
                  {data.map((hour, index) =>
                    loading ? (
                      <Loader_ms />
                    ) : (
                      <div className="hourly-card" key={index}>
                        <img
                          src={`weather_icons/${hour.weather[0].icon}.png`}
                          alt=""
                          id="cards-img"
                        />
                        <h3 className="font-semibold">{`${
                          hour.main.temp
                        }° ${"C"}`}</h3>
                        <h3 className="font-medium">{`${this.formatDayAndMonth(
                          hour.dt_txt
                        )}`}</h3>
                        <h3 className="font-normal capitalize">{`${hour.weather[0].description}`}</h3>
                        {this.state.loading ? "" : ""}
                      </div>
                    )
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </>
    );
  }
}

export default Hourly;
