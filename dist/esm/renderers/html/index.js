"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const styled_components_1 = __importDefault(require("styled-components"));
const fileLoaders_1 = require("../../utils/fileLoaders");
const HTMLRenderer = ({ mainState: { currentDocument } }) => {
    (0, react_1.useEffect)(() => {
        const b64String = currentDocument === null || currentDocument === void 0 ? void 0 : currentDocument.fileData;
        const bodyBase64 = (b64String === null || b64String === void 0 ? void 0 : b64String.replace("data:text/html;base64,", "")) || "";
        const body = window.atob(bodyBase64);
        let iframeCont = document.getElementById("html-body");
        let iframe = (iframeCont === null || iframeCont === void 0 ? void 0 : iframeCont.contentWindow) && iframeCont.contentWindow;
        if (!iframe)
            return;
        const iframeDoc = iframe.document;
        iframeDoc.open();
        iframeDoc.write(`${body}`);
        iframeDoc.close();
    }, [currentDocument]);
    return ((0, jsx_runtime_1.jsx)(Container, { id: "html-renderer", children: (0, jsx_runtime_1.jsx)(BodyIFrame, { id: "html-body", sandbox: "allow-same-origin" }) }));
};
exports.default = HTMLRenderer;
HTMLRenderer.fileTypes = ["htm", "html", "text/htm", "text/html"];
HTMLRenderer.weight = 0;
HTMLRenderer.fileLoader = fileLoaders_1.dataURLFileLoader;
const Container = styled_components_1.default.div `
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0 30px;
`;
const BodyIFrame = styled_components_1.default.iframe `
  height: 100%;
  padding: 15px;
  margin: 20px 0 20px 0;
  border: 1px solid ${(props) => props.theme.secondary};
`;
