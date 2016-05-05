"use strict";
var redux_actions_1 = require("redux-actions");
exports.ADD_PROJECT = 'ADD_PROJECT';
exports.addProject = redux_actions_1.createAction(exports.ADD_PROJECT, function (name) { return ({ name: name }); });
//# sourceMappingURL=actions.js.map