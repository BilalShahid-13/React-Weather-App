import React, { Component } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

export class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: false,
<<<<<<< HEAD
      loading: true,
=======
      loading: false,
      // Sample weather forecast data
      weatherData: [
        { time: "9:00", temperature: 15 },
        { time: "12:00", temperature: 20 },
        { time: "15:00", temperature: 18 },
        { time: "18:00", temperature: 12 },
        { time: "21:00", temperature: 10 },
      ],
>>>>>>> a6e63a3c1498d3f35a18bec624fef8918e30cbc1
    };
  }

  componentDidMount() {
    const theme = localStorage.getItem("dark") === "true";
<<<<<<< HEAD
    this.setState({ theme });
=======
    if (theme) {
      this.setState({ theme: true });
    }
>>>>>>> a6e63a3c1498d3f35a18bec624fef8918e30cbc1
  }

  componentDidUpdate(prevProps, prevState) {
    const prevTheme = prevState.theme;
    const currentTheme = localStorage.getItem("dark") === "true";

    if (currentTheme !== prevTheme) {
      this.setState({ theme: currentTheme });
    }
  }

  formatDay = (dateString) => {
    const date = new Date(dateString);
    const month = date.toLocaleString("default", { month: "short" });
    const day = date.getDate();
    return `${month} ${day}`;
  };
<<<<<<< HEAD

  formatMonth = (dateString) => {
    const date = new Date(dateString);
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
=======
  formatMonth = (dateString) => {
    const date = new Date(dateString);
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
>>>>>>> a6e63a3c1498d3f35a18bec624fef8918e30cbc1
    return `${hours}:${minutes}:${seconds}`;
  };

  render() {
<<<<<<< HEAD
    const theme = this.state.theme;

    // Safely parse localStorage data
    const weekData = localStorage.getItem("week");
    const hourlyData = localStorage.getItem("hourly");

    const week = weekData ? JSON.parse(weekData) : [];
    const hourly = hourlyData ? JSON.parse(hourlyData) : [];

    // If no data, show message
    if (week.length === 0 || hourly.length === 0) {
      return (
        <div className="flex justify-center items-center p-8 min-h-96">
          <p className="text-lg text-gray-500">
            No data available. Please navigate to "Today", "Week", or "Hourly"
            to fetch weather data first.
          </p>
        </div>
      );
    }
=======
    const { theme } = localStorage.getItem("dark");
    const week = JSON.parse(localStorage.getItem("week"));
    const hourly = JSON.parse(localStorage.getItem("hourly"));
>>>>>>> a6e63a3c1498d3f35a18bec624fef8918e30cbc1

    const chartOptions = {
      chart: {
        type: "column",
        backgroundColor: `rgba(0,0,0,0)`,
        marginLeft: 90,
        marginRight: 50,
<<<<<<< HEAD
=======

>>>>>>> a6e63a3c1498d3f35a18bec624fef8918e30cbc1
        marginTop: 30,
      },
      title: {
        text: "Weather Forecast",
      },
      xAxis: {
<<<<<<< HEAD
        categories: week.map((data) => this.formatDay(data.dt_txt)),
=======
        categories: week.map((data) => this.formatDay(data.dt_txt)), // Assuming dt_txt contains the date-time string
>>>>>>> a6e63a3c1498d3f35a18bec624fef8918e30cbc1
        title: {
          text: "Date",
        },
        labels: {
          style: {
<<<<<<< HEAD
            color: `${theme ? "#fff" : "#333"}`,
=======
            color: `${this.state.theme ? "#fff" : "#333"}`,
            // color: 'red',
>>>>>>> a6e63a3c1498d3f35a18bec624fef8918e30cbc1
            rotation: 0,
          },
        },
      },
      yAxis: {
        title: {
          text: "Temperature (°C)",
        },
<<<<<<< HEAD
        labels: {
          style: {
            color: `${theme ? "#fff" : "#333"}`,
          },
=======
        style: {
          color: "white", // Set y-axis label color to white
          rotation: 0,
>>>>>>> a6e63a3c1498d3f35a18bec624fef8918e30cbc1
        },
      },
      tooltip: {
        formatter: function () {
          return (
            "<b>" +
            this.x +
            "</b><br/>" +
            "Temperature: " +
            Highcharts.numberFormat(this.y, 1) +
            "°C"
          );
        },
      },
      series: [
        {
          name: "Temperature",
<<<<<<< HEAD
          data: week.map((data) => data.main.temp),
          color: "rgb(168 85 247)",
        },
      ],
    };

=======
          data: week.map((data) => data.main.temp), // Assuming main.temp contains temperature data
          color: "rgb(168 85 247)",
          baclground: "black",
        },
      ],
    };
>>>>>>> a6e63a3c1498d3f35a18bec624fef8918e30cbc1
    const linechart = {
      chart: {
        type: "line",
        backgroundColor: `rgba(0,0,0,0)`,
<<<<<<< HEAD
        marginLeft: 90,
        marginRight: 50,
        marginTop: 30,
=======
        marginLeft: 90, // Adjust left margin
        marginRight: 50, // Adjust right margin
        // marginBottom: 30, // Adjust bottom margin
        marginTop: 30, // Adjust top margin
>>>>>>> a6e63a3c1498d3f35a18bec624fef8918e30cbc1
      },
      title: {
        text: "Weather Timely",
      },
      xAxis: {
<<<<<<< HEAD
        categories: week.map((data) => this.formatMonth(data.dt_txt)),
        title: {
          text: "Time",
        },
        labels: {
          style: {
            color: `${theme ? "#fff" : "#333"}`,
=======
        categories: week.map((data) => this.formatMonth(data.dt_txt)), // Assuming dt_txt contains the date-time string
        title: {
          text: "Date",
        },
        labels: {
          style: {
            color: `${this.state.theme ? "#fff" : "#333"}`,
>>>>>>> a6e63a3c1498d3f35a18bec624fef8918e30cbc1
          },
        },
      },
      yAxis: {
        title: {
          text: "Temperature (°C)",
        },
<<<<<<< HEAD
        labels: {
          style: {
            color: `${theme ? "#fff" : "#333"}`,
          },
=======
        style: {
          color: `${this.state.theme ? "#fff" : "#333"}`,
>>>>>>> a6e63a3c1498d3f35a18bec624fef8918e30cbc1
        },
      },
      tooltip: {
        formatter: function () {
          return (
            "<b>" +
            this.x +
            "</b><br/>" +
            "Temperature: " +
            Highcharts.numberFormat(this.y, 1) +
            "°C"
          );
        },
      },
      series: [
        {
          name: "Temperature",
<<<<<<< HEAD
          data: week.map((data) => data.main.temp),
          color: "rgb(168 85 247)",
        },
      ],
    };

=======
          data: week.map((data) => data.main.temp), // Assuming main.temp contains temperature data
          color: "rgb(168 85 247)",
          background: "black",
        },
      ],
    };
>>>>>>> a6e63a3c1498d3f35a18bec624fef8918e30cbc1
    const barchart = {
      chart: {
        type: "bar",
        backgroundColor: `rgba(0,0,0,0)`,
<<<<<<< HEAD
        marginLeft: 90,
        marginRight: 50,
        marginBottom: 30,
        marginTop: 30,
=======
        // backgroundColor: `${theme ? "transparent" : "#fff"}`,
        marginLeft: 90, // Adjust left margin
        marginRight: 50, // Adjust right margin
        marginBottom: 30, // Adjust bottom margin
        marginTop: 30, // Adjust top margin
>>>>>>> a6e63a3c1498d3f35a18bec624fef8918e30cbc1
      },
      title: {
        text: "Weather Hourly",
      },
      xAxis: {
<<<<<<< HEAD
        categories: hourly.map((data) => this.formatMonth(data.dt_txt)),
        title: {
          text: "Time",
        },
        labels: {
          style: {
            color: `${theme ? "#fff" : "#333"}`,
=======
        categories: hourly.map((data) => this.formatMonth(data.dt_txt)), // Assuming dt_txt contains the date-time string
        title: {
          text: "Date",
        },
        labels: {
          style: {
            color: `${this.state.theme ? "#fff" : "#333"}`,
>>>>>>> a6e63a3c1498d3f35a18bec624fef8918e30cbc1
          },
        },
      },
      yAxis: {
        title: {
          text: "Temperature (°C)",
        },
<<<<<<< HEAD
        labels: {
          style: {
            color: `${theme ? "#fff" : "#333"}`,
          },
=======
        style: {
          color: `${this.state.theme ? "#fff" : "#333"}`,
>>>>>>> a6e63a3c1498d3f35a18bec624fef8918e30cbc1
        },
      },
      plotOptions: {
        bar: {
<<<<<<< HEAD
          pointPadding: -0.2,
=======
          pointPadding: -0.2, // Adjust the padding between bars here
>>>>>>> a6e63a3c1498d3f35a18bec624fef8918e30cbc1
          groupPadding: 0.2,
        },
      },
      tooltip: {
        formatter: function () {
          return (
            "<b>" +
            this.x +
            "</b><br/>" +
            "Temperature: " +
            Highcharts.numberFormat(this.y, 1) +
            "°C"
          );
        },
      },
      series: [
        {
          name: "Temperature",
<<<<<<< HEAD
          data: hourly.map((data) => data.main.temp),
          color: "rgb(168 85 247)",
=======
          data: week.map((data) => data.main.temp), // Assuming main.temp contains temperature data
          color: "rgb(168 85 247)",
          background: "black",
>>>>>>> a6e63a3c1498d3f35a18bec624fef8918e30cbc1
        },
      ],
    };

    return (
      <>
<<<<<<< HEAD
        <div className="flex flex-col gap-12 py-4 px-4">
          <HighchartsReact highcharts={Highcharts} options={chartOptions} />
          <HighchartsReact highcharts={Highcharts} options={linechart} />
=======
        <div className="flex flex-col gap-12 py-4">
          {/* <h3>Weather Weekly </h3> */}
          <HighchartsReact highcharts={Highcharts} options={chartOptions} />
          {/* <h3>Weather Timely</h3> */}
          <HighchartsReact highcharts={Highcharts} options={linechart} />
          {/* <h3>Weather Hourly</h3> */}
>>>>>>> a6e63a3c1498d3f35a18bec624fef8918e30cbc1
          <HighchartsReact highcharts={Highcharts} options={barchart} />
        </div>
      </>
    );
  }
}

<<<<<<< HEAD
export default Dashboard;
=======
export default Dashboard;
>>>>>>> a6e63a3c1498d3f35a18bec624fef8918e30cbc1
