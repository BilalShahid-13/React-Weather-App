import React, { Component } from "react";
import { Link } from "react-router-dom";
export class Footer extends Component {
  render() {
    return (
      <>
        <div className="flex flex-col px-4 cursor-default bg-purple-100 justify-center">
          <div className="flex flex-row justify-between items-center py-2">
            <h3 className="text-sm text-zinc-800">
              Powered by Open Weather Map
            </h3>
            <img src="Home/OpenWeather.svg" alt="" width={80} />
          </div>
<<<<<<< HEAD
          {/* <div className="flex flex-row justify-between">
=======
          <div className="flex flex-row justify-between">
>>>>>>> a6e63a3c1498d3f35a18bec624fef8918e30cbc1
            <Link
              to={"/"}
              className="no-underline hover:bg-purple-400 px-3 py-1 rounded-full text-zinc-800 hover:text-neutral-100"
            >
              Home
            </Link>
            <Link
              to={"/Dashboard"}
              className="no-underline hover:bg-purple-400 px-3 py-1 rounded-full text-zinc-800 hover:text-neutral-100"
            >
              Dashboard
            </Link>
            <Link
              to={"/About"}
              className="no-underline hover:bg-purple-400 px-3 py-1 rounded-full text-zinc-800 hover:text-neutral-100"
            >
              About
            </Link>
<<<<<<< HEAD
          </div> */}
=======
          </div>
>>>>>>> a6e63a3c1498d3f35a18bec624fef8918e30cbc1
        </div>
      </>
    );
  }
}

export default Footer;
