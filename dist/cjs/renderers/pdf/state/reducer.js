"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reducer = exports.initialPDFState = void 0;
const actions_1 = require("./actions");
exports.initialPDFState = {
    defaultZoomLevel: 1,
    zoomLevel: 1,
    zoomJump: 0.1,
    paginated: true,
    numPages: 0,
    currentPage: 1,
};
const reducer = (state = exports.initialPDFState, action) => {
    switch (action.type) {
        case actions_1.SET_ZOOM_LEVEL: {
            const { value } = action;
            return Object.assign(Object.assign({}, state), { zoomLevel: value });
        }
        case actions_1.SET_PDF_PAGINATED: {
            const { value } = action;
            return Object.assign(Object.assign({}, state), { paginated: value });
        }
        case actions_1.SET_NUM_PAGES: {
            const { value } = action;
            return Object.assign(Object.assign({}, state), { numPages: value });
        }
        case actions_1.SET_CURRENT_PAGE: {
            const { value } = action;
            return Object.assign(Object.assign({}, state), { currentPage: value });
        }
        default:
            return state;
    }
};
exports.reducer = reducer;
