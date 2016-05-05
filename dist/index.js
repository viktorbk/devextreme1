"use strict";
var React = require("react");
var ReactDOM = require("react-dom");
var App_1 = require("./components/App");
var initialState = {
    projects: [{ id: 1, name: 'Prj 1' }, { id: 2, name: 'Prj 2' }],
    mainMenuItems: [{ id: 1, name: 'File', items: [{ id: 10, name: 'New' }] }]
};
ReactDOM.render(React.createElement(App_1.App, {state: initialState}), document.getElementById("content"));
//# sourceMappingURL=index.js.map