import React, { Component } from "react";
import "../styles/SplashScreen.css";

export class SplashScreen extends Component {
  render() {
    return (
      <>
        <div className="splash">
          <div className="back">
            <iframe src="https://lottie.host/embed/8394189b-ddb9-468e-ae70-0b443ee0f2a2/oLg8A77qUD.json"></iframe>
            <iframe src="https://lottie.host/embed/846fbf6f-4d00-4723-baa5-564daa8935cd/AyTzTTJbjg.json"></iframe>
          </div>
          <div className="foreground">
            <span>
              <h2>WeatherWise</h2>
              <video src="/mix.mp4" autoPlay loop></video>
            </span>
            <iframe src="https://lottie.host/embed/a1564aef-a330-40dc-b932-b790d9cc6f29/1I0VjvRbAb.json"></iframe>
          </div>
          <p>Powered By : OpenWeather Map</p>
        </div>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/bodymovin/5.7.4/lottie.min.js"></script>
      </>
    );
  }
}

export default SplashScreen;
