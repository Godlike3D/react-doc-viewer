"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const image_1 = __importDefault(require("../image"));
const JPGRenderer = (props) => (0, jsx_runtime_1.jsx)(image_1.default, Object.assign({}, props));
JPGRenderer.fileTypes = ["jpg", "jpeg", "image/jpg", "image/jpeg"];
JPGRenderer.weight = 0;
exports.default = JPGRenderer;
