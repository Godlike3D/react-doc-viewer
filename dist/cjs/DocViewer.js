"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const styled_components_1 = __importStar(require("styled-components"));
const HeaderBar_1 = require("./components/HeaderBar");
const ProxyRenderer_1 = require("./components/ProxyRenderer");
const defaultTheme_1 = require("./defaultTheme");
const renderers_1 = require("./renderers");
const DocViewerProvider_1 = require("./store/DocViewerProvider");
const DocViewer = (0, react_1.forwardRef)((props, ref) => {
    const { documents, theme } = props;
    if (!documents) {
        throw new Error("Please provide an array of documents to DocViewer!");
    }
    return ((0, jsx_runtime_1.jsx)(DocViewerProvider_1.DocViewerProvider, Object.assign({ ref: ref, pluginRenderers: renderers_1.DocViewerRenderers }, props, { children: (0, jsx_runtime_1.jsx)(styled_components_1.ThemeProvider, { theme: theme ? Object.assign(Object.assign({}, defaultTheme_1.defaultTheme), theme) : defaultTheme_1.defaultTheme, children: (0, jsx_runtime_1.jsxs)(Container, { id: "react-doc-viewer", "data-testid": "react-doc-viewer", className: props.className, style: props.style, children: [(0, jsx_runtime_1.jsx)(HeaderBar_1.HeaderBar, {}), (0, jsx_runtime_1.jsx)(ProxyRenderer_1.ProxyRenderer, {})] }) }) })));
});
exports.default = (0, react_1.memo)(DocViewer);
const Container = styled_components_1.default.div `
  display: flex;
  flex-direction: column;
  overflow: hidden;
  background: #ffffff;
  width: 100%;
  height: 100%;
`;
