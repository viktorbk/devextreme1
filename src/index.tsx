/// <reference path="../typings/main.d.ts"/>

import * as React from "react";
import * as ReactDOM from "react-dom";

import {App} from "./components/App";
import {State} from "./redux/model";

var initialState: State = {
  projects: [{id: 1, name: 'Prj 1'}, {id: 2, name: 'Prj 2'}],
  mainMenuItems: [{id:1, name:'File', items: [{id:10, name: 'New'}]}]
};

ReactDOM.render(
  <App state={initialState}/>
  ,
  document.getElementById("content")
);
