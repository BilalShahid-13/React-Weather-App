import React, { Component } from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Search from "./components/Search";
import Dashboard from "./components/Dashboard";
import Home from "./components/Home";
import Weather from "./components/Weather";
import Week from "./components/Week";
import Hourly from "./components/Hourly";
import Footer from "./components/Footer";
import Info from "./components/Info";
import SplashScreen from "./Loaders/SplashScreen";
import { gsap } from "gsap";

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "lahore",
      isFarenheit: false,
      splash: true,
    };
  }
  componentDidMount() {
    if (this.state.splash) {
      setTimeout(() => {
        this.setState({ splash: false });
        gsap.to(".splash", {
          top: -700,
          duration: 0.7,
        });
      }, 5000);
    }
  }
  componentDidUpdate(prevProps, prevState) {
    const input = localStorage.getItem("input-val");
    if (input !== prevState.input) {
      this.setState({ input: input });
    }
  }

  render() {
    return () => {
      <>
        <Router>
          {this.state.splash ? (
            <SplashScreen />
          ) : (
            <>
              {/* <SplashScreen /> */}

              <main className="space-y-2">
                <Navbar />
                <Search />
                {/* <Home /> */}
                <Routes>
                  <Route path="/Dashboard" element={<Dashboard />} />
                  <Route index element={<Home />} path="/" />
                  <Route
                    path="/today"
                    element={
                      <Weather
                        input={this.state.input}
                        isFahrenheit={this.state.isFarenheit}
                      />
                    }
                  />
                  <Route
                    path="/week"
                    element={<Week input={this.state.input} />}
                  />
                  <Route
                    path="/hourly"
                    element={<Hourly input={this.state.input} />}
                  />
                  {/* <Route path="/Setting" element={<Settings />} /> */}
                  <Route path="/Info" element={<Info />} />
                  {/* <Route path="/Navbar" element={<Navbar />} /> */}
                </Routes>
                <Footer />
              </main>
            </>
          )}
        </Router>
      </>;
    };
  }
}

export default App;
