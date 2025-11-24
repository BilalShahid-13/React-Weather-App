import React, { Component } from "react";

export class Info extends Component {
  render() {
    return (
      <>
        <main className="flex flex-col justify-center items-center px-2">
          <h3 className="font-semibold text-2xl tracking-wide">Info</h3>
          <p>
            Introducing WeatherWise, your comprehensive weather companion
            powered by cutting-edge technologies for a seamless user experience.
            With WeatherVue, stay ahead of the elements with real-time weather
            updates, beautifully presented through HighchartsJS, ensuring
            accuracy and clarity in every forecast.
          </p>
          <img src="Home/auth0.svg" alt="" width={30} />
          <p>
            Our authentication system, powered by Auth0, ensures your data
            remains secure and accessible only to you. Say goodbye to cumbersome
            login processes and hello to effortless access to personalized
            weather insights.
          </p>
          <img src="Home/axios.svg" alt="" width={90} />
          <p>
            Leveraging the power of Axios, WeatherVue fetches data swiftly and
            efficiently, delivering up-to-the-minute weather information
            straight to your device. Bootstrap and React combine to offer a
            responsive and intuitive interface, making navigation a breeze
            across all devices.
          </p>
          <div className="flex flex-row gap-3">
            <img src="Home/tailwindcss.svg" alt="" width={40} />
            <img src="Home/gsap-greensock.svg" alt="" width={40} />
          </div>
          <p>
            Tailwind CSS adds flair to the design, ensuring a visually appealing
            experience that's as delightful to use as it is informative. With
            GSAP animations, weather updates come to life, adding a touch of
            dynamism to your browsing experience.
          </p>
          <div className="flex flex-row gap-3">
            <img src="Home/nodejs-2.svg" alt="" width={40} />
            <img src="Home/express.svg" alt="" width={40} />
            <img src="Home/nodemon.svg" alt="" width={40} />
          </div>
          <p>
            Under the hood, WeatherWise is powered by Node.js, Express, and
            Nodemon, ensuring robust performance and reliability. Whether you're
            accessing WeatherVue on the web or through our mobile app, expect
            seamless performance and lightning-fast updates.
          </p>
          <p>
            With WeatherWise, embrace the future of weather tracking. Whether
            you're planning your next outdoor adventure or simply staying
            informed about the day ahead, WeatherWise has you covered with
            precision, style, and reliability.
          </p>
        </main>
      </>
    );
  }
}

export default Info;
