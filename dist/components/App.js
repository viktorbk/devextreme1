"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
var Menu_1 = require('./Menu');
var TabList_1 = require('./TabList');
var App = (function (_super) {
    __extends(App, _super);
    function App() {
        _super.apply(this, arguments);
    }
    App.prototype.newProject = function () {
        alert('new project created!');
    };
    App.prototype.render = function () {
        return (React.createElement("div", null, 
            React.createElement(Menu_1.Menu, {items: this.props.state.mainMenuItems, newPrj: this.newProject}), 
            React.createElement(TabList_1.TabList, {projects: this.props.state.projects})));
    };
    return App;
}(React.Component));
exports.App = App;
//# sourceMappingURL=App.js.map