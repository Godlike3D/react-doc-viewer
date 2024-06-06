"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const react_pdf_1 = require("react-pdf");
const styled_components_1 = __importDefault(require("styled-components"));
const useTranslation_1 = require("../../../../hooks/useTranslation");
const state_1 = require("../../state");
const PDFSinglePage = ({ pageNum }) => {
    const { state: { mainState, paginated, zoomLevel, numPages, currentPage }, } = (0, react_1.useContext)(state_1.PDFContext);
    const { t } = (0, useTranslation_1.useTranslation)();
    const rendererRect = (mainState === null || mainState === void 0 ? void 0 : mainState.rendererRect) || null;
    const _pageNum = pageNum || currentPage;
    return ((0, jsx_runtime_1.jsxs)(PageWrapper, { id: "pdf-page-wrapper", last: _pageNum >= numPages, children: [!paginated && ((0, jsx_runtime_1.jsx)(PageTag, { id: "pdf-page-info", children: t("pdfPluginPageNumber", {
                    currentPage: _pageNum,
                    allPagesCount: numPages,
                }) })), (0, jsx_runtime_1.jsx)(react_pdf_1.Page, { pageNumber: _pageNum || currentPage, scale: zoomLevel, height: ((rendererRect === null || rendererRect === void 0 ? void 0 : rendererRect.height) || 100) - 100, width: ((rendererRect === null || rendererRect === void 0 ? void 0 : rendererRect.width) || 100) - 100, loading: t("pdfPluginLoading") })] }));
};
exports.default = PDFSinglePage;
const PageWrapper = styled_components_1.default.div `
  margin: 20px 0;
`;
const PageTag = styled_components_1.default.div `
  padding: 0 0 10px 10px;
  color: ${(props) => props.theme.textTertiary};
  font-size: 14px;
  text-align: left;

  @media (max-width: 768px) {
    font-size: 10px;
  }
`;
