"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProxyRenderer = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const styled_components_1 = __importStar(require("styled-components"));
const actions_1 = require("../store/actions");
const getFileName_1 = require("../utils/getFileName");
const useDocumentLoader_1 = require("../hooks/useDocumentLoader");
const useWindowSize_1 = require("../hooks/useWindowSize");
const common_1 = require("./common");
const icons_1 = require("./icons");
const LoadingTimout_1 = require("./LoadingTimout");
const useTranslation_1 = require("../hooks/useTranslation");
const Contents = ({ documents, documentLoading, config, currentDocument, fileName, CurrentRenderer, state, t, }) => {
    var _a, _b, _c;
    if (!documents.length) {
        return (0, jsx_runtime_1.jsx)("div", { id: "no-documents" });
    }
    else if (documentLoading) {
        if (config && ((_a = config === null || config === void 0 ? void 0 : config.loadingRenderer) === null || _a === void 0 ? void 0 : _a.overrideComponent)) {
            const OverrideComponent = config.loadingRenderer.overrideComponent;
            return ((0, jsx_runtime_1.jsx)(LoadingTimout_1.LoadingTimeout, { children: (0, jsx_runtime_1.jsx)(OverrideComponent, { document: currentDocument, fileName: fileName }) }));
        }
        return ((0, jsx_runtime_1.jsx)(LoadingTimout_1.LoadingTimeout, { children: (0, jsx_runtime_1.jsx)(LoadingContainer, { id: "loading-renderer", "data-testid": "loading-renderer", children: (0, jsx_runtime_1.jsx)(LoadingIconContainer, { children: (0, jsx_runtime_1.jsx)(icons_1.LoadingIcon, { color: "#444", size: 40 }) }) }) }));
    }
    else {
        if (CurrentRenderer) {
            return (0, jsx_runtime_1.jsx)(CurrentRenderer, { mainState: state });
        }
        else if (CurrentRenderer === undefined) {
            return null;
        }
        else {
            if (config && ((_b = config === null || config === void 0 ? void 0 : config.noRenderer) === null || _b === void 0 ? void 0 : _b.overrideComponent)) {
                const OverrideComponent = config.noRenderer.overrideComponent;
                return ((0, jsx_runtime_1.jsx)(OverrideComponent, { document: currentDocument, fileName: fileName }));
            }
            return ((0, jsx_runtime_1.jsxs)("div", { id: "no-renderer", "data-testid": "no-renderer", children: [t("noRendererMessage", {
                        fileType: (_c = currentDocument === null || currentDocument === void 0 ? void 0 : currentDocument.fileType) !== null && _c !== void 0 ? _c : "",
                    }), (0, jsx_runtime_1.jsx)(DownloadButton, { id: "no-renderer-download", href: currentDocument === null || currentDocument === void 0 ? void 0 : currentDocument.uri, download: currentDocument === null || currentDocument === void 0 ? void 0 : currentDocument.uri, children: t("downloadButtonLabel") })] }));
        }
    }
};
const ProxyRenderer = () => {
    var _a;
    const { state, dispatch, CurrentRenderer } = (0, useDocumentLoader_1.useDocumentLoader)();
    const { documents, documentLoading, currentDocument, config } = state;
    const size = (0, useWindowSize_1.useWindowSize)();
    const { t } = (0, useTranslation_1.useTranslation)();
    const containerRef = (0, react_1.useCallback)((node) => {
        node && dispatch((0, actions_1.setRendererRect)(node === null || node === void 0 ? void 0 : node.getBoundingClientRect()));
    }, [size]);
    const fileName = (0, getFileName_1.getFileName)(currentDocument, ((_a = config === null || config === void 0 ? void 0 : config.header) === null || _a === void 0 ? void 0 : _a.retainURLParams) || false);
    return ((0, jsx_runtime_1.jsx)(Container, { id: "proxy-renderer", "data-testid": "proxy-renderer", ref: containerRef, children: (0, jsx_runtime_1.jsx)(Contents, { state,
            documents,
            documentLoading,
            config,
            currentDocument,
            fileName,
            CurrentRenderer,
            t }) }));
};
exports.ProxyRenderer = ProxyRenderer;
const Container = styled_components_1.default.div `
  display: flex;
  flex: 1;
  overflow-y: auto;
`;
const LoadingContainer = styled_components_1.default.div `
  display: flex;
  flex: 1;
  height: 75px;
  align-items: center;
  justify-content: center;
`;
const spinAnim = (0, styled_components_1.keyframes) `
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;
const LoadingIconContainer = styled_components_1.default.div `
  animation-name: ${spinAnim};
  animation-duration: 4s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
`;
const DownloadButton = (0, styled_components_1.default)(common_1.LinkButton) `
  width: 130px;
  height: 30px;
  background-color: ${(props) => props.theme.primary};
  @media (max-width: 768px) {
    width: 125px;
    height: 25px;
  }
`;
