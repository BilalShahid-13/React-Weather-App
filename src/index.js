import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Auth0Provider } from "@auth0/auth0-react";
import { Router } from "react-router";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router basename="/Weather-App-React">
    <Auth0Provider
      domain="dev-co617wd8uihafkow.us.auth0.com"
      clientId="q9elPx0WpZlOHjphgnJ7vzrKelgu72v4"
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    >
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Auth0Provider>
  </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
