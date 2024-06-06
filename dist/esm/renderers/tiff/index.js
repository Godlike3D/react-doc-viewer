"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const styled_components_1 = __importDefault(require("styled-components"));
const useTranslation_1 = require("../../hooks/useTranslation");
const fileLoaders_1 = require("../../utils/fileLoaders");
const image_1 = __importDefault(require("../image"));
const tiffToCanvas_1 = require("./tiffToCanvas");
const TIFFRenderer = (props) => {
    const { mainState: { currentDocument }, } = props;
    const { t } = (0, useTranslation_1.useTranslation)();
    const [loadedCanvas, setLoadedCanvas] = (0, react_1.useState)(false);
    const [corruptedFile, setCorruptedFile] = (0, react_1.useState)(false);
    (0, react_1.useEffect)(() => {
        if (!currentDocument || loadedCanvas)
            return;
        var canvas = document.getElementById("tiff-img");
        try {
            canvas && (0, tiffToCanvas_1.parseTIFF)(currentDocument.fileData, canvas);
            setLoadedCanvas(true);
        }
        catch (error) {
            setCorruptedFile(true);
        }
    }, [currentDocument, loadedCanvas]);
    if (corruptedFile) {
        return ((0, jsx_runtime_1.jsx)(image_1.default, Object.assign({}, props, { children: (0, jsx_runtime_1.jsx)("div", { children: t("brokenFile") }) })));
    }
    return ((0, jsx_runtime_1.jsx)(image_1.default, Object.assign({}, props, { children: (0, jsx_runtime_1.jsx)(Canvas, { id: "tiff-img" }) })));
};
TIFFRenderer.fileTypes = ["tif", "tiff", "image/tif", "image/tiff"];
TIFFRenderer.weight = 0;
TIFFRenderer.fileLoader = fileLoaders_1.arrayBufferFileLoader;
exports.default = TIFFRenderer;
const Canvas = styled_components_1.default.canvas `
  max-width: 95%;
  max-height: 95%;
`;
