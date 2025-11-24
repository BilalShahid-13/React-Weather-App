import express from "express";
import axios from "axios";

const app = express();

app.get("/", async (req, res) => {
  res.json({ message: "Hello World" });
});

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});

app.get("/today", async (req, res) => {
  const search = "Lahore";
  const api = `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=781f54e1a024eb252acbd5935a250c48&units=metric`;

  try {
    const response = await fetch(api);
    if (!response.ok) {
      throw new Error(
        `Fetch error: ${response.status} - ${response.statusText}`
      );
    }
    const jsonData = await response.json();
    // Handle success
    console.log(jsonData);
    res.send(jsonData)
  } catch (error) {
    // Handle error
    console.error("Fetch error:", error);
    // Optionally, display an error message to the user
  }
});
