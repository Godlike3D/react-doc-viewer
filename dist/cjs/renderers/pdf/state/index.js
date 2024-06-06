"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PDFProvider = exports.PDFContext = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const reducer_1 = require("./reducer");
const PDFContext = (0, react_1.createContext)({ state: reducer_1.initialPDFState, dispatch: () => null });
exports.PDFContext = PDFContext;
const PDFProvider = ({ children, mainState, }) => {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
    const [state, dispatch] = (0, react_1.useReducer)(reducer_1.reducer, Object.assign(Object.assign({}, reducer_1.initialPDFState), { defaultZoomLevel: (_c = (_b = (_a = mainState.config) === null || _a === void 0 ? void 0 : _a.pdfZoom) === null || _b === void 0 ? void 0 : _b.defaultZoom) !== null && _c !== void 0 ? _c : reducer_1.initialPDFState.defaultZoomLevel, zoomLevel: (_f = (_e = (_d = mainState.config) === null || _d === void 0 ? void 0 : _d.pdfZoom) === null || _e === void 0 ? void 0 : _e.defaultZoom) !== null && _f !== void 0 ? _f : reducer_1.initialPDFState.zoomLevel, zoomJump: (_j = (_h = (_g = mainState.config) === null || _g === void 0 ? void 0 : _g.pdfZoom) === null || _h === void 0 ? void 0 : _h.zoomJump) !== null && _j !== void 0 ? _j : reducer_1.initialPDFState.zoomJump, paginated: ((_k = mainState.config) === null || _k === void 0 ? void 0 : _k.pdfVerticalScrollByDefault)
            ? false
            : reducer_1.initialPDFState.paginated, mainState }));
    return ((0, jsx_runtime_1.jsx)(PDFContext.Provider, { value: { state, dispatch }, children: children }));
};
exports.PDFProvider = PDFProvider;
