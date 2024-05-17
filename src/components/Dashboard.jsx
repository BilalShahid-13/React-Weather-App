import React, { Component } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

export class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: false,
      loading: false,
      // Sample weather forecast data
      weatherData: [
        { time: "9:00", temperature: 15 },
        { time: "12:00", temperature: 20 },
        { time: "15:00", temperature: 18 },
        { time: "18:00", temperature: 12 },
        { time: "21:00", temperature: 10 },
      ],
    };
  }

  componentDidMount() {
    const theme = localStorage.getItem("dark") === "true";
    if (theme) {
      this.setState({ theme: true });
    }
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
  formatMonth = (dateString) => {
    const date = new Date(dateString);
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    return `${hours}:${minutes}:${seconds}`;
  };

  render() {
    const { theme } = localStorage.getItem("dark");
    const week = JSON.parse(localStorage.getItem("week"));
    const hourly = JSON.parse(localStorage.getItem("hourly"));

    const chartOptions = {
      chart: {
        type: "column",
        backgroundColor: `rgba(0,0,0,0)`,
        marginLeft: 90,
        marginRight: 50,

        marginTop: 30,
      },
      title: {
        text: "Weather Forecast",
      },
      xAxis: {
        categories: week.map((data) => this.formatDay(data.dt_txt)), // Assuming dt_txt contains the date-time string
        title: {
          text: "Date",
        },
        labels: {
          style: {
            color: `${this.state.theme ? "#fff" : "#333"}`,
            // color: 'red',
            rotation: 0,
          },
        },
      },
      yAxis: {
        title: {
          text: "Temperature (°C)",
        },
        style: {
          color: "white", // Set y-axis label color to white
          rotation: 0,
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
          data: week.map((data) => data.main.temp), // Assuming main.temp contains temperature data
          color: "rgb(168 85 247)",
          baclground: "black",
        },
      ],
    };
    const linechart = {
      chart: {
        type: "line",
        backgroundColor: `rgba(0,0,0,0)`,
        marginLeft: 90, // Adjust left margin
        marginRight: 50, // Adjust right margin
        // marginBottom: 30, // Adjust bottom margin
        marginTop: 30, // Adjust top margin
      },
      title: {
        text: "Weather Timely",
      },
      xAxis: {
        categories: week.map((data) => this.formatMonth(data.dt_txt)), // Assuming dt_txt contains the date-time string
        title: {
          text: "Date",
        },
        labels: {
          style: {
            color: `${this.state.theme ? "#fff" : "#333"}`,
          },
        },
      },
      yAxis: {
        title: {
          text: "Temperature (°C)",
        },
        style: {
          color: `${this.state.theme ? "#fff" : "#333"}`,
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
          data: week.map((data) => data.main.temp), // Assuming main.temp contains temperature data
          color: "rgb(168 85 247)",
          background: "black",
        },
      ],
    };
    const barchart = {
      chart: {
        type: "bar",
        backgroundColor: `rgba(0,0,0,0)`,
        // backgroundColor: `${theme ? "transparent" : "#fff"}`,
        marginLeft: 90, // Adjust left margin
        marginRight: 50, // Adjust right margin
        marginBottom: 30, // Adjust bottom margin
        marginTop: 30, // Adjust top margin
      },
      title: {
        text: "Weather Hourly",
      },
      xAxis: {
        categories: hourly.map((data) => this.formatMonth(data.dt_txt)), // Assuming dt_txt contains the date-time string
        title: {
          text: "Date",
        },
        labels: {
          style: {
            color: `${this.state.theme ? "#fff" : "#333"}`,
          },
        },
      },
      yAxis: {
        title: {
          text: "Temperature (°C)",
        },
        style: {
          color: `${this.state.theme ? "#fff" : "#333"}`,
        },
      },
      plotOptions: {
        bar: {
          pointPadding: -0.2, // Adjust the padding between bars here
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
          data: week.map((data) => data.main.temp), // Assuming main.temp contains temperature data
          color: "rgb(168 85 247)",
          background: "black",
        },
      ],
    };

    return (
      <>
        <div className="flex flex-col gap-12 py-4">
          {/* <h3>Weather Weekly </h3> */}
          <HighchartsReact highcharts={Highcharts} options={chartOptions} />
          {/* <h3>Weather Timely</h3> */}
          <HighchartsReact highcharts={Highcharts} options={linechart} />
          {/* <h3>Weather Hourly</h3> */}
          <HighchartsReact highcharts={Highcharts} options={barchart} />
        </div>
      </>
    );
  }
}

export default Dashboard;
