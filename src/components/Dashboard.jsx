import React, { Component } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

export class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: false,
      loading: true,
    };
  }

  componentDidMount() {
    const theme = localStorage.getItem("dark") === "true";
    this.setState({ theme });
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
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    return `${hours}:${minutes}:${seconds}`;
  };

  render() {
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
        categories: week.map((data) => this.formatDay(data.dt_txt)),
        title: {
          text: "Date",
        },
        labels: {
          style: {
            color: `${theme ? "#fff" : "#333"}`,
            rotation: 0,
          },
        },
      },
      yAxis: {
        title: {
          text: "Temperature (°C)",
        },
        labels: {
          style: {
            color: `${theme ? "#fff" : "#333"}`,
          },
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
          data: week.map((data) => data.main.temp),
          color: "rgb(168 85 247)",
        },
      ],
    };

    const linechart = {
      chart: {
        type: "line",
        backgroundColor: `rgba(0,0,0,0)`,
        marginLeft: 90,
        marginRight: 50,
        marginTop: 30,
      },
      title: {
        text: "Weather Timely",
      },
      xAxis: {
        categories: week.map((data) => this.formatMonth(data.dt_txt)),
        title: {
          text: "Time",
        },
        labels: {
          style: {
            color: `${theme ? "#fff" : "#333"}`,
          },
        },
      },
      yAxis: {
        title: {
          text: "Temperature (°C)",
        },
        labels: {
          style: {
            color: `${theme ? "#fff" : "#333"}`,
          },
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
          data: week.map((data) => data.main.temp),
          color: "rgb(168 85 247)",
        },
      ],
    };

    const barchart = {
      chart: {
        type: "bar",
        backgroundColor: `rgba(0,0,0,0)`,
        marginLeft: 90,
        marginRight: 50,
        marginBottom: 30,
        marginTop: 30,
      },
      title: {
        text: "Weather Hourly",
      },
      xAxis: {
        categories: hourly.map((data) => this.formatMonth(data.dt_txt)),
        title: {
          text: "Time",
        },
        labels: {
          style: {
            color: `${theme ? "#fff" : "#333"}`,
          },
        },
      },
      yAxis: {
        title: {
          text: "Temperature (°C)",
        },
        labels: {
          style: {
            color: `${theme ? "#fff" : "#333"}`,
          },
        },
      },
      plotOptions: {
        bar: {
          pointPadding: -0.2,
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
          data: hourly.map((data) => data.main.temp),
          color: "rgb(168 85 247)",
        },
      ],
    };

    return (
      <>
        <div className="flex flex-col gap-12 py-4 px-4">
          <HighchartsReact highcharts={Highcharts} options={chartOptions} />
          <HighchartsReact highcharts={Highcharts} options={linechart} />
          <HighchartsReact highcharts={Highcharts} options={barchart} />
        </div>
      </>
    );
  }
}

export default Dashboard;