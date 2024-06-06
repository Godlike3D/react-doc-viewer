"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const styled_components_1 = __importDefault(require("styled-components"));
const VideoRenderer = ({ mainState: { currentDocument } }) => {
    if (!currentDocument)
        return null;
    return ((0, jsx_runtime_1.jsx)(Container, { id: "video-renderer", children: (0, jsx_runtime_1.jsx)(Video, { controls: true, src: currentDocument.uri }) }));
};
exports.default = VideoRenderer;
VideoRenderer.fileTypes = ["video/mp4", "video/quicktime", "video/x-msvideo"];
VideoRenderer.weight = 0;
const Container = styled_components_1.default.div `
  width: 100%;
`;
const Video = styled_components_1.default.video `
  width: 100%;
  height: 100%;
  border: 0;
`;
