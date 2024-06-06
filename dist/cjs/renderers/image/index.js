"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const styled_components_1 = __importDefault(require("styled-components"));
const ImageProxyRenderer = (props) => {
    const { mainState: { currentDocument }, children, } = props;
    if (!currentDocument)
        return null;
    return ((0, jsx_runtime_1.jsx)(Container, Object.assign({ id: "image-renderer" }, props, { children: children || ((0, jsx_runtime_1.jsx)(Img, { id: "image-img", src: currentDocument.fileData })) })));
};
exports.default = ImageProxyRenderer;
ImageProxyRenderer.fileTypes = [];
ImageProxyRenderer.weight = 0;
const Container = styled_components_1.default.div `
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: #fff;
`;
const Img = styled_components_1.default.img `
  max-width: 95%;
  max-height: 95%;
`;
