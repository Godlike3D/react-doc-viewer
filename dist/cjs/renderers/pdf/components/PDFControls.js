"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const styled_components_1 = __importDefault(require("styled-components"));
const common_1 = require("../../../components/common");
const state_1 = require("../state");
const actions_1 = require("../state/actions");
const useTranslation_1 = require("../../../hooks/useTranslation");
const icons_1 = require("./icons");
const PDFPagination_1 = __importDefault(require("./PDFPagination"));
const PDFControls = () => {
    const { t } = (0, useTranslation_1.useTranslation)();
    const { state: { mainState, paginated, zoomLevel, numPages, zoomJump, defaultZoomLevel, }, dispatch, } = (0, react_1.useContext)(state_1.PDFContext);
    const currentDocument = (mainState === null || mainState === void 0 ? void 0 : mainState.currentDocument) || null;
    return ((0, jsx_runtime_1.jsxs)(Container, { id: "pdf-controls", children: [paginated && numPages > 1 && (0, jsx_runtime_1.jsx)(PDFPagination_1.default, {}), (currentDocument === null || currentDocument === void 0 ? void 0 : currentDocument.fileData) && ((0, jsx_runtime_1.jsx)(DownloadButton, { id: "pdf-download", href: currentDocument === null || currentDocument === void 0 ? void 0 : currentDocument.fileData, download: (currentDocument === null || currentDocument === void 0 ? void 0 : currentDocument.fileName) || (currentDocument === null || currentDocument === void 0 ? void 0 : currentDocument.uri), title: t("downloadButtonLabel"), children: (0, jsx_runtime_1.jsx)(icons_1.DownloadPDFIcon, { color: "#000", size: "75%" }) })), (0, jsx_runtime_1.jsx)(ControlButton, { id: "pdf-zoom-out", onMouseDown: () => dispatch((0, actions_1.setZoomLevel)(zoomLevel - zoomJump)), children: (0, jsx_runtime_1.jsx)(icons_1.ZoomOutPDFIcon, { color: "#000", size: "80%" }) }), (0, jsx_runtime_1.jsx)(ControlButton, { id: "pdf-zoom-in", onMouseDown: () => dispatch((0, actions_1.setZoomLevel)(zoomLevel + zoomJump)), children: (0, jsx_runtime_1.jsx)(icons_1.ZoomInPDFIcon, { color: "#000", size: "80%" }) }), (0, jsx_runtime_1.jsx)(ControlButton, { id: "pdf-zoom-reset", onMouseDown: () => dispatch((0, actions_1.setZoomLevel)(defaultZoomLevel)), disabled: zoomLevel === defaultZoomLevel, children: (0, jsx_runtime_1.jsx)(icons_1.ResetZoomPDFIcon, { color: "#000", size: "70%" }) }), numPages > 1 && ((0, jsx_runtime_1.jsx)(ControlButton, { id: "pdf-toggle-pagination", onMouseDown: () => dispatch((0, actions_1.setPDFPaginated)(!paginated)), children: (0, jsx_runtime_1.jsx)(icons_1.TogglePaginationPDFIcon, { color: "#000", size: "70%", reverse: paginated }) }))] }));
};
exports.default = PDFControls;
const Container = styled_components_1.default.div `
  display: flex;
  position: sticky;
  top: 0;
  left: 0;
  z-index: 1;
  justify-content: flex-end;
  padding: 8px;
  background-color: ${(props) => props.theme.tertiary};
  box-shadow: 0px 2px 3px #00000033;

  @media (max-width: 768px) {
    padding: 6px;
  }
`;
const ControlButton = (0, styled_components_1.default)(common_1.Button) `
  width: 30px;
  height: 30px;
  @media (max-width: 768px) {
    width: 25px;
    height: 25px;
  }
`;
const DownloadButton = (0, styled_components_1.default)(common_1.LinkButton) `
  width: 30px;
  height: 30px;
  @media (max-width: 768px) {
    width: 25px;
    height: 25px;
  }
`;
