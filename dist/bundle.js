/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/// <reference path="../typings/main.d.ts"/>
	"use strict";
	var React = __webpack_require__(1);
	var ReactDOM = __webpack_require__(2);
	var App_1 = __webpack_require__(3);
	var initialState = {
	    projects: [{ id: 1, name: 'Prj 1' }, { id: 2, name: 'Prj 2' }],
	    mainMenuItems: [{ id: 1, name: 'File', items: [{ id: 10, name: 'New' }] }]
	};
	ReactDOM.render(React.createElement(App_1.App, {state: initialState}), document.getElementById("content"));


/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = React;

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = ReactDOM;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(1);
	var Menu_1 = __webpack_require__(4);
	var TabList_1 = __webpack_require__(5);
	var App = (function (_super) {
	    __extends(App, _super);
	    function App() {
	        _super.apply(this, arguments);
	    }
	    App.prototype.newProject = function () {
	        alert('New project created!');
	    };
	    App.prototype.render = function () {
	        return (React.createElement("div", null, React.createElement(Menu_1.Menu, {items: this.props.state.mainMenuItems, newPrj: this.newProject}), React.createElement(TabList_1.TabList, {projects: this.props.state.projects})));
	    };
	    return App;
	}(React.Component));
	exports.App = App;


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(1);
	var ReactDOM = __webpack_require__(2);
	var Menu = (function (_super) {
	    __extends(Menu, _super);
	    function Menu() {
	        _super.apply(this, arguments);
	    }
	    Menu.prototype.componentDidMount = function () {
	        var _this = this;
	        var menu = $(ReactDOM.findDOMNode(this));
	        menu.dxMenu({
	            dataSource: this.props.items,
	            hideSubmenuOnMouseLeave: false,
	            displayExpr: "name",
	            onItemClick: function (itm) {
	                if (itm.itemData.id == 10)
	                    _this.props.newPrj("New Project");
	            }
	        }).dxMenu("instance");
	    };
	    Menu.prototype.render = function () {
	        return React.createElement("div", null);
	    };
	    return Menu;
	}(React.Component));
	exports.Menu = Menu;


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(1);
	var ReactDOM = __webpack_require__(2);
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
	        return (React.createElement("div", {id: "tabs"}, React.createElement("ul", null, this.props.projects.map(function (prj) {
	            return React.createElement("li", {key: prj.id}, React.createElement("a", {href: "#tabs-" + prj.id}, prj.name));
	        })), this.props.projects.map(function (prj) {
	            return React.createElement("div", {key: prj.id, id: "tabs-" + prj.id}, React.createElement("p", null, "TabContent of tab nr ", prj.id));
	        })));
	    };
	    return TabList;
	}(React.Component));
	exports.TabList = TabList;


/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map