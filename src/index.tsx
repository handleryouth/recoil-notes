import React from "react";
import ReactDOM from "react-dom/client";
import { RecoilRoot } from "recoil";
import App from "./App";
import "./index.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    {/* // IMPORTANT: RecoilRoot is a component that wraps the entire app */}
    <RecoilRoot>
      <App />
    </RecoilRoot>
  </React.StrictMode>
);
