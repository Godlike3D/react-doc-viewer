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
const icons_1 = require("./icons");
const useTranslation_1 = require("../../../hooks/useTranslation");
const PDFPagination = () => {
    const { state: { currentPage, numPages }, dispatch, } = (0, react_1.useContext)(state_1.PDFContext);
    const { t } = (0, useTranslation_1.useTranslation)();
    return ((0, jsx_runtime_1.jsxs)(Container, { id: "pdf-pagination", children: [(0, jsx_runtime_1.jsx)(PageNavButtonLeft, { id: "pdf-pagination-prev", onClick: () => dispatch((0, actions_1.setCurrentPage)(currentPage - 1)), disabled: currentPage === 1, children: (0, jsx_runtime_1.jsx)(icons_1.PrevPDFNavIcon, { color: "#000", size: "50%" }) }), (0, jsx_runtime_1.jsx)(PageTag, { id: "pdf-pagination-info", children: t("pdfPluginPageNumber", {
                    currentPage,
                    allPagesCount: numPages,
                }) }), (0, jsx_runtime_1.jsx)(PageNavButtonRight, { id: "pdf-pagination-next", onClick: () => dispatch((0, actions_1.setCurrentPage)(currentPage + 1)), disabled: currentPage >= numPages, children: (0, jsx_runtime_1.jsx)(icons_1.NextPDFNavIcon, { color: "#000", size: "50%" }) })] }));
};
exports.default = PDFPagination;
const Container = styled_components_1.default.div `
  display: flex;
  align-items: center;
`;
const PageNavButtonLeft = (0, styled_components_1.default)(common_1.Button) `
  width: 30px;
  height: 30px;
  margin: 0 5px;

  @media (max-width: 768px) {
    width: 25px;
    height: 25px;
  }
`;
const PageNavButtonRight = (0, styled_components_1.default)(PageNavButtonLeft) `
  margin: 0 20px 0 5px;
`;
const PageTag = styled_components_1.default.div `
  color: ${(props) => props.theme.textPrimary};
  font-size: 14px;
  text-align: left;

  @media (max-width: 768px) {
    font-size: 10px;
  }
`;
