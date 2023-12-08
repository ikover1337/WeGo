import React from "react";
import ReactDOM from "react-dom";
import bridge from '@vkontakte/vk-bridge';
import App from "./App";
import './css/style.css';
import {ConfigProvider, AdaptivityProvider, AppRoot} from "@vkontakte/vkui";
import {BrowserRouter} from 'react-router-dom';




// Init VK Mini App
bridge.send("VKWebAppInit");

ReactDOM.render(<App />, document.getElementById("root"));
if (process.env.NODE_ENV === "development") {
  import("./eruda").then(({ default: eruda }) => {}); //runtime download
}



ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

