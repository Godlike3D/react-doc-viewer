"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoadingTimeout = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const DocViewerProvider_1 = require("../store/DocViewerProvider");
const LoadingTimeout = ({ children }) => {
    var _a, _b;
    const { state } = (0, react_1.useContext)(DocViewerProvider_1.DocViewerContext);
    const { config } = state;
    const [shouldLoadingRender, setShouldLoadingRender] = (0, react_1.useState)(((_a = config === null || config === void 0 ? void 0 : config.loadingRenderer) === null || _a === void 0 ? void 0 : _a.showLoadingTimeout) === false);
    (0, react_1.useEffect)(() => {
        var _a;
        setTimeout(() => {
            setShouldLoadingRender(true);
        }, typeof ((_a = config === null || config === void 0 ? void 0 : config.loadingRenderer) === null || _a === void 0 ? void 0 : _a.showLoadingTimeout) === "number"
            ? config.loadingRenderer.showLoadingTimeout
            : 500);
    }, [(_b = config === null || config === void 0 ? void 0 : config.loadingRenderer) === null || _b === void 0 ? void 0 : _b.showLoadingTimeout]);
    if (!shouldLoadingRender) {
        return null;
    }
    return (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: children });
};
exports.LoadingTimeout = LoadingTimeout;
