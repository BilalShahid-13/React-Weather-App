import { gsap } from "gsap";
import { Component } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Hourly from "./components/Hourly";
import Info from "./components/Info";
import Navbar from "./components/Navbar";
import Search from "./components/Search";
import Weather from "./components/Weather";
import Week from "./components/Week";
import SplashScreen from "./Loaders/SplashScreen";
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
    return (
      <>
        {this.state.splash ? (
          <SplashScreen />
        ) : (
          <>
            {/* <SplashScreen /> */}

            <Navbar />
            <main className="space-y-2">
              <Search />
              {/* <Home /> */}
              <Routes>
                <Route path="/Dashboard" element={<Dashboard />} />
                <Route
                  exact
                  element={<Home splash={this.state.splash} />}
                  path="/"
                />
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
            </main>
            <Footer />
          </>
        )}
      </>
    );
  }
}

export default App;
