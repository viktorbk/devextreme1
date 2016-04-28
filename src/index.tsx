/// <reference path="../typings/main.d.ts"/>

import * as React from "react";
import * as ReactDOM from "react-dom";

import { Menu } from "./components/Menu";

ReactDOM.render(
  <Menu items={ [{id:1, name:'File', items: [{id:10, name: 'New'}]}] } />, document.getElementById("content")
);
