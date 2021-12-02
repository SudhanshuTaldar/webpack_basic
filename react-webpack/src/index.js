require("file-loader?name=[name].[ext]!./index.html");
import ReactDOM from "react-dom";
import React from "react";
import { App } from "./App";
import "./App.scss";
const appElement = document.getElementById("app");
ReactDOM.render(<App />, appElement);
