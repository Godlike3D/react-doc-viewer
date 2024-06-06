"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileName = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const styled_components_1 = __importDefault(require("styled-components"));
const DocViewerProvider_1 = require("../store/DocViewerProvider");
const getFileName_1 = require("../utils/getFileName");
const FileName = () => {
    var _a, _b;
    const { state: { config, currentDocument }, } = (0, react_1.useContext)(DocViewerProvider_1.DocViewerContext);
    if (!currentDocument || ((_a = config === null || config === void 0 ? void 0 : config.header) === null || _a === void 0 ? void 0 : _a.disableFileName))
        return null;
    const fileName = (0, getFileName_1.getFileName)(currentDocument, ((_b = config === null || config === void 0 ? void 0 : config.header) === null || _b === void 0 ? void 0 : _b.retainURLParams) || false);
    return ((0, jsx_runtime_1.jsx)(Container, { id: "file-name", "data-testid": "file-name", children: fileName }));
};
exports.FileName = FileName;
const Container = styled_components_1.default.div `
  flex: 1;
  text-align: left;
  color: ${(props) => props.theme.textPrimary};
  font-weight: bold;
  margin: 0 10px;
  overflow: hidden;
`;
