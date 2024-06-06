"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
/* eslint-disable */
const react_1 = require("react");
const react_pdf_1 = require("react-pdf");
const styled_components_1 = __importDefault(require("styled-components"));
const useTranslation_1 = require("../../../../hooks/useTranslation");
const state_1 = require("../../state");
const actions_1 = require("../../state/actions");
const reducer_1 = require("../../state/reducer");
const PDFAllPages_1 = require("./PDFAllPages");
const PDFSinglePage_1 = __importDefault(require("./PDFSinglePage"));
const PDFPages = () => {
    const { state: { mainState, paginated }, dispatch, } = (0, react_1.useContext)(state_1.PDFContext);
    const { t } = (0, useTranslation_1.useTranslation)();
    const currentDocument = (mainState === null || mainState === void 0 ? void 0 : mainState.currentDocument) || null;
    (0, react_1.useEffect)(() => {
        dispatch((0, actions_1.setNumPages)(reducer_1.initialPDFState.numPages));
    }, [currentDocument]);
    if (!currentDocument || currentDocument.fileData === undefined)
        return null;
    return ((0, jsx_runtime_1.jsx)(DocumentPDF, { file: currentDocument.fileData, onLoadSuccess: ({ numPages }) => dispatch((0, actions_1.setNumPages)(numPages)), loading: (0, jsx_runtime_1.jsx)("span", { children: t("pdfPluginLoading") }), children: paginated ? (0, jsx_runtime_1.jsx)(PDFSinglePage_1.default, {}) : (0, jsx_runtime_1.jsx)(PDFAllPages_1.PDFAllPages, {}) }));
};
const DocumentPDF = (0, styled_components_1.default)(react_pdf_1.Document) `
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`;
exports.default = PDFPages;
