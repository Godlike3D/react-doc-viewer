"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HeaderBar = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const styled_components_1 = __importDefault(require("styled-components"));
const DocViewerProvider_1 = require("../store/DocViewerProvider");
const actions_1 = require("../store/actions");
const DocumentNav_1 = require("./DocumentNav");
const FileName_1 = require("./FileName");
const HeaderBar = () => {
    var _a, _b, _c;
    const { state, dispatch } = (0, react_1.useContext)(DocViewerProvider_1.DocViewerContext);
    const { config } = state;
    if ((_a = config === null || config === void 0 ? void 0 : config.header) === null || _a === void 0 ? void 0 : _a.disableHeader)
        return null;
    const override = (_c = (_b = config === null || config === void 0 ? void 0 : config.header) === null || _b === void 0 ? void 0 : _b.overrideComponent) === null || _c === void 0 ? void 0 : _c.call(_b, state, () => dispatch((0, actions_1.previousDocument)()), () => dispatch((0, actions_1.nextDocument)()));
    if (override) {
        return override;
    }
    else {
        return ((0, jsx_runtime_1.jsxs)(Container, { id: "header-bar", "data-testid": "header-bar", children: [(0, jsx_runtime_1.jsx)(FileName_1.FileName, {}), (0, jsx_runtime_1.jsx)(DocumentNav_1.DocumentNav, {})] }));
    }
};
exports.HeaderBar = HeaderBar;
const Container = styled_components_1.default.div `
  display: flex;
  justify-content: flex-end;
  align-items: center;
  z-index: 1;
  padding: 0 10px;
  background-color: ${(props) => props.theme.primary};
  font-size: 16px;
  min-height: 50px;

  @media (max-width: 768px) {
    min-height: 30px;
    padding: 5px;
    font-size: 10px;
  }
`;
