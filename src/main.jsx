import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Auth0Provider } from "@auth0/auth0-react";

// dev-kdnya26f3gczuosn.us.auth0.com
// VWsAyU2CKliLnUb8B3DNPWY8h4tN7es6
ReactDOM.createRoot(document.getElementById("root")).render(
  <Auth0Provider
    domain="dev-kdnya26f3gczuosn.us.auth0.com"
    clientId="VWsAyU2CKliLnUb8B3DNPWY8h4tN7es6"
    authorizationParams={{
      redirect_uri: window.location.origin,
    }}
  >
    <App />
  </Auth0Provider>
);
