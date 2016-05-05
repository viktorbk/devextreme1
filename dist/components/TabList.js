"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
var ReactDOM = require("react-dom");
var TabList = (function (_super) {
    __extends(TabList, _super);
    function TabList() {
        _super.apply(this, arguments);
    }
    TabList.prototype.componentDidMount = function () {
        var tab_div = $(ReactDOM.findDOMNode(this));
        tab_div.tabs();
    };
    TabList.prototype.render = function () {
        return (React.createElement("div", {id: "tabs"}, 
            React.createElement("ul", null, this.props.projects.map(function (prj) {
                return React.createElement("li", {key: prj.id}, 
                    React.createElement("a", {href: "#tabs-" + prj.id}, prj.name)
                );
            })), 
            this.props.projects.map(function (prj) {
                return React.createElement("div", {key: prj.id, id: "tabs-" + prj.id}, 
                    React.createElement("p", null, 
                        "TabContent of tab nr ", 
                        prj.id)
                );
            })));
    };
    return TabList;
}(React.Component));
exports.TabList = TabList;
//# sourceMappingURL=TabList.js.map