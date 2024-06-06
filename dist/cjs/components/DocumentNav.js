"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocumentNav = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const styled_components_1 = __importDefault(require("styled-components"));
const DocViewerProvider_1 = require("../store/DocViewerProvider");
const actions_1 = require("../store/actions");
const Button_1 = require("./common/Button");
const icons_1 = require("./icons");
const useTranslation_1 = require("../hooks/useTranslation");
const DocumentNav = () => {
    const { state: { currentDocument, currentFileNo, documents }, dispatch, } = (0, react_1.useContext)(DocViewerProvider_1.DocViewerContext);
    const { t } = (0, useTranslation_1.useTranslation)();
    if (documents.length <= 1 || !currentDocument)
        return null;
    let fileName = currentDocument.uri || "";
    const splitURL = fileName.split("/");
    if (splitURL.length) {
        fileName = splitURL[splitURL.length - 1];
    }
    return ((0, jsx_runtime_1.jsxs)(Container, { id: "doc-nav", children: [(0, jsx_runtime_1.jsx)("p", { id: "doc-nav-info", children: t("documentNavInfo", {
                    currentFileNo: currentFileNo + 1,
                    allFilesCount: documents.length,
                }) }), (0, jsx_runtime_1.jsx)(ButtonPrev, { id: "doc-nav-prev", onClick: () => dispatch((0, actions_1.previousDocument)()), disabled: currentFileNo === 0, children: (0, jsx_runtime_1.jsx)(icons_1.PrevDocIcon, { color: "#fff", size: "60%" }) }), (0, jsx_runtime_1.jsx)(ButtonNext, { id: "doc-nav-next", onClick: () => dispatch((0, actions_1.nextDocument)()), disabled: currentFileNo >= documents.length - 1, children: (0, jsx_runtime_1.jsx)(icons_1.NextDocIcon, { color: "#fff", size: "60%" }) })] }));
};
exports.DocumentNav = DocumentNav;
const Container = styled_components_1.default.div `
  min-width: 150px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  margin: 0 10px;
  color: ${(props) => props.theme.textPrimary};
`;
const ButtonPrev = (0, styled_components_1.default)(Button_1.ButtonSecondary) `
  width: 30px;
  height: 30px;
  margin: 0 5px 0 10px;

  @media (max-width: 768px) {
    width: 25px;
    height: 25px;
  }
`;
const ButtonNext = (0, styled_components_1.default)(ButtonPrev) `
  margin: 0 5px;
`;
