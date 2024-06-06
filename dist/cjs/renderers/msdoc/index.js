"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const styled_components_1 = __importDefault(require("styled-components"));
const MSDocRenderer = ({ mainState: { currentDocument } }) => {
    if (!currentDocument)
        return null;
    return ((0, jsx_runtime_1.jsx)(Container, { id: "msdoc-renderer", children: (0, jsx_runtime_1.jsx)(IFrame, { id: "msdoc-iframe", title: "msdoc-iframe", src: `https://view.officeapps.live.com/op/embed.aspx?src=${encodeURIComponent(currentDocument.uri)}`, frameBorder: "0" }) }));
};
exports.default = MSDocRenderer;
const MSDocFTMaps = {
    odt: ["odt", "application/vnd.oasis.opendocument.text"],
    doc: ["doc", "application/msword"],
    docx: [
        "docx",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
        "application/octet-stream",
    ],
    xls: ["xls", "application/vnd.ms-excel"],
    xlsx: [
        "xlsx",
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    ],
    ppt: ["ppt", "application/vnd.ms-powerpoint"],
    pptx: [
        "pptx",
        "application/vnd.openxmlformats-officedocument.presentationml.presentation",
    ],
};
MSDocRenderer.fileTypes = [
    ...MSDocFTMaps.odt,
    ...MSDocFTMaps.doc,
    ...MSDocFTMaps.docx,
    ...MSDocFTMaps.xls,
    ...MSDocFTMaps.xlsx,
    ...MSDocFTMaps.ppt,
    ...MSDocFTMaps.pptx,
];
MSDocRenderer.weight = 0;
MSDocRenderer.fileLoader = ({ fileLoaderComplete }) => fileLoaderComplete();
const Container = styled_components_1.default.div `
  width: 100%;
`;
const IFrame = styled_components_1.default.iframe `
  width: 100%;
  height: 100%;
  border: 0;
`;
