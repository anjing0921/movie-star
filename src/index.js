import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Auth0Provider } from "@auth0/auth0-react";
import { AuthContextProvider } from './store/auth-context';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-sixj4sjj6nsnsqf0.us.auth0.com"
      clientId="vkOMbXsvaw0yJDSJ0ENuT2mvdIZABQZf"
      authorizationParams={{
        redirect_uri: "https://www.dealmoon.com"
      }}
    >
      <AuthContextProvider>
        <App />
        </AuthContextProvider>
      </Auth0Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
