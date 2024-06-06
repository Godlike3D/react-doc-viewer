"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const styled_components_1 = __importDefault(require("styled-components"));
const fileLoaders_1 = require("../../utils/fileLoaders");
const TXTRenderer = ({ mainState: { currentDocument } }) => {
    return ((0, jsx_runtime_1.jsx)(Container, { id: "txt-renderer", children: currentDocument === null || currentDocument === void 0 ? void 0 : currentDocument.fileData }));
};
exports.default = TXTRenderer;
TXTRenderer.fileTypes = ["txt", "text/plain"];
TXTRenderer.weight = 0;
TXTRenderer.fileLoader = fileLoaders_1.textFileLoader;
const Container = styled_components_1.default.div `
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 30px;
`;
