"use strict";
var redux_1 = require('redux');
var reducer_1 = require('./reducer');
var configureStore = function (initialState) {
    var store = redux_1.createStore(reducer_1.default, initialState);
    return store;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = configureStore;
//# sourceMappingURL=store.js.map