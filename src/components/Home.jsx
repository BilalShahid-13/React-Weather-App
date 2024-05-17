import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Slider from "./Slider";
import Loader from "../Loaders/Loader";
import "../styles/Home.css";

export class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
    };
  }
  handleImageLoad = () => {
    this.setState({ loading: false }); // Hide loader when image is loaded
  };
  render() {
    const { loading } = this.props;
    return (
      <main>
        {loading ? (
          <Loader />
        ) : (
          <div
            id="carouselExampleAutoplaying"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active relative">
                <img
                  src="Home/slide-1.jpg"
                  className="d-block w-100"
                  alt="..."
                  onLoad={this.handleImageLoad}
                />
                <div
                  className="flex-row inline-flex justify-between items-center absolute bottom-6 bg-neutral-100 gap-3 max-md:translate-x-[85%] md:translate-x-[640px] px-2 rounded-full max-sm:translate-x-[15%]"
                  id="carousel-p"
                >
                  <p className="my-2 font-thin">
                    <span className="font-semibold">Powered By </span>
                    OpenWeather Map
                  </p>
                  <img
                    src="Home/open-weather-logo.png"
                    alt=""
                    width={40}
                    className="rounded-full bg-zinc-300"
                  />
                </div>
              </div>
              <div className="carousel-item">
                <img
                  src="Home/slide-2.jpg"
                  alt="..."
                  className="d-block w-100"
                  onLoad={this.handleImageLoad}
                />
                <div
                  className="flex-row inline-flex justify-between items-center absolute bottom-6 bg-neutral-100 gap-3 max-md:translate-x-[85%] md:translate-x-[640px] px-2 rounded-full max-sm:translate-x-[15%] "
                  id="carousel-p"
                >
                  <p className="my-2 font-thin">
                    <span className="font-semibold">Powered By </span>
                    OpenWeather Map
                  </p>
                  <img
                    src="Home/open-weather-logo.png"
                    alt=""
                    width={40}
                    className="rounded-full bg-zinc-300"
                    onLoad={this.handleImageLoad}
                  />
                </div>
              </div>
              <div className="carousel-item">
                <img
                  src="Home/slide-3.jpg"
                  className="d-block w-100"
                  alt="..."
                  onLoad={this.handleImageLoad}
                />
                <div
                  className="flex-row inline-flex justify-between items-center absolute bottom-6 bg-neutral-100 gap-3 max-md:translate-x-[85%] md:translate-x-[640px] px-2 rounded-full max-sm:translate-x-[15%] "
                  id="carousel-p"
                >
                  <p className="my-2 font-thin">
                    <span className="font-semibold">Powered By </span>{" "}
                    OpenWeather Map
                  </p>
                  <img
                    src="Home/open-weather-logo.png"
                    alt=""
                    width={40}
                    className="rounded-full bg-zinc-300"
                    onLoad={this.handleImageLoad}
                  />
                </div>
              </div>
              <div className="carousel-item">
                <img
                  src="Home/slide-4.png"
                  className="d-block w-100"
                  alt="..."
                  onLoad={this.handleImageLoad}
                />
                <div
                  className="flex-row inline-flex justify-between items-center absolute bottom-6 bg-neutral-100 gap-3 max-md:translate-x-[85%] md:translate-x-[640px] px-2 rounded-full max-sm:translate-x-[15%] "
                  id="carousel-p"
                >
                  <p className="my-2 font-thin">
                    <span className="font-semibold">Powered By </span>{" "}
                    OpenWeather Map
                  </p>
                  <img
                    src="Home/open-weather-logo.png"
                    alt=""
                    width={40}
                    className="rounded-full bg-zinc-300"
                    onLoad={this.handleImageLoad}
                  />
                </div>
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleAutoplaying"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleAutoplaying"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        )}
        <Slider />
      </main>
    );
  }
}

export default Home;
