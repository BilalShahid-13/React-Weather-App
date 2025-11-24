import React, { Component } from "react";
import "../styles/Cards.css";
import { ScrollToLeft, ScrollToRight, Time } from "../constants/items";
import Loader_ms from "../Loaders/Loader_ms";
import { gsap } from "gsap";
import { FaAngleRight } from "react-icons/fa";
import { FaAngleLeft } from "react-icons/fa";

export class Cards extends Component {
  static defaultProps = {
    img: "weather_icons/01d.png",
    cel: 30,
  };
  constructor(props) {
    super(props);
    this.state = {
      main: "",
      data: "",
      wind: "",
      sunrise: "",
      sunset: "",
      loading: true,
    };
  }
  componentDidMount() {
    gsap.to(".card_,h3,img", {
      top: -100,
      opacity: 0,
      duration: 0.4,
      stagger: 0.3,
    });
    gsap.from(".card_,h3,img", {
      opacity: 1,
      top: 0,
      duration: 0.4,
      stagger: 0.3,
    });
  }
  componentDidUpdate(prevProps) {
    const { main, data } = this.props;
    if (
      this.props.main !== prevProps.main ||
      this.props.data !== prevProps.data
    ) {
      this.setState({
        main: main,
        data: data,
        wind: data.wind.speed,
        sunrise: data.sys.sunrise,
        sunset: data.sys.sunset,
        loading: false, // Set loading to false when data is fetched
      });
    }
  }

  render() {
    const CardItems = [
      {
        title: "Temperature",
        img: "Temperature.svg",
        value: this.state.main.temp,
        notaion: `°C`,
      },
      {
        title: "Max Temperature",
        img: "temperature-max.svg",
        value: this.state.main.temp_max,
        notaion: `°C`,
      },
      {
        title: "Min Temperature",
        img: "temperature-min.svg",
        value: this.state.main.temp_min,
        notaion: `°C`,
      },
      {
        title: "Pressure",
        img: "pressure.svg",
        value: this.state.main.pressure,
        notaion: "nPa",
      },
      {
        title: "Humidity",
        img: "humidity.svg",
        value: this.state.main.humidity,
        notaion: "%",
      },
      {
        title: "Feels Like",
        img: "wind.svg",
        value: this.state.wind,
        notaion: "Km/h",
      },
      {
        title: "Sunrise",
        img: "sunrise.svg",
        value: <Time time={this.state.sunrise} />,
      },
      {
        title: "Sunset",
        img: "sunset.svg",
        value: <Time time={this.state.sunset} />,
      },
    ];
    return (
      <>
        <div className="space-y-4 card_">
          <h3 className="px-4 text-lg font-medium">Today Highlights</h3>
          <div className="flex flex-row overflow-x-scroll  px-4 pb-4">
            <button className="left-0 sticky rounded-full p-3" onClick={ScrollToLeft}>
              <FaAngleLeft />
            </button>
            <div className="flex flex-row w-full px-32">
              {CardItems.map((item, index) => (
                <div
                  className="inline-flex justify-center items-center mr-12 ml-4"
                  key={index}
                  id="outer-card"
                >
                  <div className="cards">
                    <h3 className="font-semibold">{item.title}</h3>
                    <img src={`weather_info/${item.img}`} alt="" id="cards-img" />
                    {this.state.loading ? (
                      <Loader_ms />
                    ) : (
                      <p>
                        {item.value}
                        {item.notaion}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
            <span className="right-0 sticky bg-purple-500 rounded-full p-3 " onClick={ScrollToRight}>
              <FaAngleRight />
            </span>
          </div>
        </div>
      </>
    );
  }
}

export default Cards;
