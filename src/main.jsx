import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { NameProvider } from "./Components/Context/tokenContext.jsx";
import { MeContext } from "./Components/Context/Me.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <NameProvider>
        <MeContext>
          <App />
        </MeContext>
      </NameProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
