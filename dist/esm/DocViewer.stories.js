"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NoRenderType = exports.WithRef = exports.ManualNextPrevNavigation = exports.WithPDFInput = exports.Default = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const DocViewer_1 = __importDefault(require("./DocViewer"));
const renderers_1 = require("./renderers");
const pdf_file_pdf_1 = __importDefault(require("./exampleFiles/pdf-file.pdf"));
const pdf_multiple_pages_file_pdf_1 = __importDefault(require("./exampleFiles/pdf-multiple-pages-file.pdf"));
const png_image_png_1 = __importDefault(require("./exampleFiles/png-image.png"));
const csv_file_csv_1 = __importDefault(require("./exampleFiles/csv-file.csv"));
const eps_file_eps_1 = __importDefault(require("./exampleFiles/eps-file.eps"));
const webp_file_webp_1 = __importDefault(require("./exampleFiles/webp-file.webp"));
/* eslint-disable import/no-anonymous-default-export */
exports.default = {
    title: "DocViewer",
};
const docs = [
    { uri: pdf_file_pdf_1.default },
    { uri: png_image_png_1.default },
    { uri: csv_file_csv_1.default },
    { uri: pdf_multiple_pages_file_pdf_1.default },
    { uri: webp_file_webp_1.default },
];
const Default = () => ((0, jsx_runtime_1.jsx)(DocViewer_1.default, { documents: docs, initialActiveDocument: docs[1], config: {
        noRenderer: {
            overrideComponent: ({ document, fileName }) => {
                const fileText = fileName || (document === null || document === void 0 ? void 0 : document.fileType) || "";
                console.log(document);
                if (fileText) {
                    return (0, jsx_runtime_1.jsxs)("div", { children: ["no renderer for ", fileText] });
                }
                return (0, jsx_runtime_1.jsx)("div", { children: "no renderer" });
            },
        },
        loadingRenderer: {
            overrideComponent: ({ document, fileName }) => {
                const fileText = fileName || (document === null || document === void 0 ? void 0 : document.fileType) || "";
                if (fileText) {
                    return (0, jsx_runtime_1.jsxs)("div", { children: ["loading (", fileText, ")"] });
                }
                return (0, jsx_runtime_1.jsx)("div", { children: "loading" });
            },
        },
        csvDelimiter: ",",
        pdfZoom: {
            defaultZoom: 1.1,
            zoomJump: 0.2,
        },
        pdfVerticalScrollByDefault: true,
    }, language: "pl" }));
exports.Default = Default;
const WithPDFInput = () => {
    const [selectedDocs, setSelectedDocs] = (0, react_1.useState)([]);
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("input", { type: "file", accept: ".pdf", multiple: true, onChange: (el) => {
                    var _a;
                    return ((_a = el.target.files) === null || _a === void 0 ? void 0 : _a.length) &&
                        setSelectedDocs(Array.from(el.target.files));
                } }), (0, jsx_runtime_1.jsx)(DocViewer_1.default, { documents: selectedDocs.map((file) => ({
                    uri: window.URL.createObjectURL(file),
                    fileName: file.name,
                })), pluginRenderers: renderers_1.DocViewerRenderers })] }));
};
exports.WithPDFInput = WithPDFInput;
const ManualNextPrevNavigation = () => {
    const [activeDocument, setActiveDocument] = (0, react_1.useState)(docs[0]);
    const handleDocumentChange = (document) => {
        setActiveDocument(document);
    };
    return ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: (0, jsx_runtime_1.jsx)(DocViewer_1.default, { documents: docs, activeDocument: activeDocument, onDocumentChange: handleDocumentChange }) }));
};
exports.ManualNextPrevNavigation = ManualNextPrevNavigation;
const WithRef = () => {
    const docViewerRef = (0, react_1.useRef)(null);
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("button", { onClick: () => { var _a; return (_a = docViewerRef === null || docViewerRef === void 0 ? void 0 : docViewerRef.current) === null || _a === void 0 ? void 0 : _a.prev(); }, children: "Prev Document By Ref" }), (0, jsx_runtime_1.jsx)("button", { onClick: () => { var _a; return (_a = docViewerRef === null || docViewerRef === void 0 ? void 0 : docViewerRef.current) === null || _a === void 0 ? void 0 : _a.next(); }, children: "Next Document By Ref" })] }), (0, jsx_runtime_1.jsx)(DocViewer_1.default, { ref: docViewerRef, documents: docs, config: { header: { disableHeader: true } } })] }));
};
exports.WithRef = WithRef;
const NoRenderType = () => {
    const docs = [{ uri: eps_file_eps_1.default, fileType: "application/postscript" }];
    return ((0, jsx_runtime_1.jsx)(DocViewer_1.default, { documents: docs, initialActiveDocument: docs[0], pluginRenderers: renderers_1.DocViewerRenderers, language: "en" }));
};
exports.NoRenderType = NoRenderType;
