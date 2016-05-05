"use strict";
var lodash_1 = require("lodash");
var actions_1 = require('./actions');
var reducer = function (state, action) {
    if (action.type == actions_1.ADD_PROJECT) {
        var newProjects = state.projects.concat([{
            id: state.projects.reduce(function (maxId, prj) { return Math.max(prj.id, maxId); }, -1) + 1,
            name: action.payload.name
        }]);
        var newState = lodash_1.assign({}, state, { projects: newProjects, mainMenuItems: state.mainMenuItems });
        return newState;
    }
    return state;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = reducer;
//# sourceMappingURL=reducer.js.map