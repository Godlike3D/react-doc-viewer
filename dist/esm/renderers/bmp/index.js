"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const image_1 = __importDefault(require("../image"));
const BMPRenderer = (props) => (0, jsx_runtime_1.jsx)(image_1.default, Object.assign({}, props));
BMPRenderer.fileTypes = ["bmp", "image/bmp"];
BMPRenderer.weight = 0;
exports.default = BMPRenderer;
