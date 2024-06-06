"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PDFAllPages = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const state_1 = require("../../state");
const PDFSinglePage_1 = __importDefault(require("./PDFSinglePage"));
const PDFAllPages = () => {
    const { state: { numPages }, } = (0, react_1.useContext)(state_1.PDFContext);
    const PagesArray = [];
    for (let i = 0; i < numPages; i++) {
        PagesArray.push((0, jsx_runtime_1.jsx)(PDFSinglePage_1.default, { pageNum: i + 1 }, i + 1));
    }
    return (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: PagesArray });
};
exports.PDFAllPages = PDFAllPages;
