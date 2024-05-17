// SelectorItems.js
const SelectorItems = [
  {
    title: "Today",
    link: "Today",
  },
  {
    title: "Tomorrow",
    link: "Tomorrow",
  },
  {
    title: "Next 7 Days",
    link: "Week",
  },
];

export default SelectorItems;

// DateTime.js
export const DateTime = () => {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const now = new Date();

  // Get the current date components
  const year = now.getFullYear(); // e.g., 2024
  const month = months[now.getMonth()]; // Month is zero-based (0 for January), so add 1
  const day = now.getDate(); // Day of the month (1-31)
  const dayOfWeek = daysOfWeek[now.getDay()];

  return `${dayOfWeek} ${day} ${month} , ${year}`;
};

// Time.js
export const Time = ({ time }) => {
  const timestamp = time; // Unix timestamp in seconds

  // Create a new Date object by multiplying the timestamp by 1000 (to convert seconds to milliseconds)
  const date = new Date(timestamp * 1000);

  // Format the date and time using Date methods
  const formattedTime = date.toLocaleTimeString();

  return formattedTime;
};

export const CardItems = [
  { title: "Temperature", img: "Temperature.svg" },
  { title: "Max Temperature", img: "temperature-max.svg" },
  { title: "Min Temperature", img: "temperature-min.svg" },
  { title: "Pressure", img: "pressure.svg" },
  { title: "Humidity", img: "humidity.svg" },
  { title: "Feels Like", img: "wind.svg" },
  { title: "Sunrise", img: "sunrise.svg" },
  { title: "Sunset", img: "sunset.svg" },
];

export function ScrollToRight() {
  const rightDiv = document.querySelector(".scrollbar");
  const scrollAmount = 321; // Initialize scrollAmount with 321

  rightDiv.scrollBy({
    left: scrollAmount, // Use scrollAmount directly since it's positive
    behavior: "smooth",
  });
}

export function ScrollToLeft() {
  const rightDiv = document.querySelector(".scrollbar");
  const scrollAmount = 321;
  rightDiv.scrollBy({
    left: -scrollAmount,
    behavior: "smooth",
  });
}
