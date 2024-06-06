"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("@testing-library/react");
const index_1 = __importDefault(require("../index"));
const pdf_file_pdf_1 = __importDefault(require("../exampleFiles/pdf-file.pdf"));
const png_image_png_1 = __importDefault(require("../exampleFiles/png-image.png"));
const eps_file_eps_1 = __importDefault(require("../exampleFiles/eps-file.eps"));
test("renders component with no documents", () => {
    (0, react_1.render)((0, jsx_runtime_1.jsx)(index_1.default, { documents: [] }));
    expect(react_1.screen.getByTestId("react-doc-viewer")).toBeDefined();
});
test("renders component with documents", () => {
    const docs = [{ uri: pdf_file_pdf_1.default }, { uri: png_image_png_1.default }];
    (0, react_1.render)((0, jsx_runtime_1.jsx)(index_1.default, { documents: docs }));
    expect(react_1.screen.getByTestId("react-doc-viewer")).toBeDefined();
    expect(react_1.screen.getByText(`Document 1 of ${docs.length}`)).toBeDefined();
});
test("renders component with unsupported file type", () => {
    const docs = [{ uri: eps_file_eps_1.default, fileType: "application/postscript" }];
    (0, react_1.render)((0, jsx_runtime_1.jsx)(index_1.default, { documents: docs }));
    expect(react_1.screen.getByTestId("react-doc-viewer")).toBeDefined();
    expect(react_1.screen.getByText("No renderer for file type: application/postscript")).toBeInTheDocument();
});
test("renders doc viewer with initialActiveDocument prop", () => {
    const docs = [{ uri: pdf_file_pdf_1.default }, { uri: png_image_png_1.default }];
    (0, react_1.render)((0, jsx_runtime_1.jsx)(index_1.default, { documents: docs, initialActiveDocument: docs[1] }));
    const proxyRenderer = react_1.screen.getByTestId("proxy-renderer");
    expect(react_1.screen.getByTestId("react-doc-viewer")).toBeDefined();
    expect(react_1.screen.getByText(`Document 2 of ${docs.length}`)).toBeDefined();
    expect(proxyRenderer).toBeDefined();
    expect(proxyRenderer.querySelector("img")).toBeDefined();
});
