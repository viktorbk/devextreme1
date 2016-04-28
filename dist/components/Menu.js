"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
var ReactDOM = require("react-dom");
var Menu = (function (_super) {
    __extends(Menu, _super);
    function Menu() {
        _super.apply(this, arguments);
    }
    Menu.prototype.componentDidMount = function () {
        var menu = $(ReactDOM.findDOMNode(this));
        menu.dxMenu({
            dataSource: this.props.items,
            hideSubmenuOnMouseLeave: false,
            displayExpr: "name",
            onItemClick: function (itm) {
                console.log(itm.itemData);
            }
        }).dxMenu("instance");
    };
    Menu.prototype.render = function () {
        return React.createElement("div", null);
    };
    return Menu;
}(React.Component));
exports.Menu = Menu;
//# sourceMappingURL=Menu.js.map