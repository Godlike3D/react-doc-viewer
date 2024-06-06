"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_pdf_1 = require("react-pdf");
const styled_components_1 = __importDefault(require("styled-components"));
const PDFPages_1 = __importDefault(require("./components/pages/PDFPages"));
const PDFControls_1 = __importDefault(require("./components/PDFControls"));
const state_1 = require("./state");
react_pdf_1.pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${react_pdf_1.pdfjs.version}/build/pdf.worker.min.js`;
const PDFRenderer = ({ mainState }) => {
    return ((0, jsx_runtime_1.jsx)(state_1.PDFProvider, { mainState: mainState, children: (0, jsx_runtime_1.jsxs)(Container, { id: "pdf-renderer", "data-testid": "pdf-renderer", children: [(0, jsx_runtime_1.jsx)(PDFControls_1.default, {}), (0, jsx_runtime_1.jsx)(PDFPages_1.default, {})] }) }));
};
exports.default = PDFRenderer;
PDFRenderer.fileTypes = ["pdf", "application/pdf"];
PDFRenderer.weight = 0;
const Container = styled_components_1.default.div `
  display: flex;
  flex-direction: column;
  flex: 1;
  overflow-y: auto;

  /* width */
  &::-webkit-scrollbar {
    ${(props) => {
    return props.theme.disableThemeScrollbar ? "" : "width: 10px";
}};
  }
  /* Track */
  &::-webkit-scrollbar-track {
    /* background: ${(props) => props.theme.secondary}; */
  }
  /* Handle */
  &::-webkit-scrollbar-thumb {
    background: ${(props) => props.theme.tertiary};
  }
  /* Handle on hover */
  &::-webkit-scrollbar-thumb:hover {
    background: ${(props) => props.theme.primary};
  }
`;
