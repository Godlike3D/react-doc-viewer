"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useRendererSelector = void 0;
const react_1 = require("react");
const DocViewerProvider_1 = require("../store/DocViewerProvider");
const useRendererSelector = () => {
    const { state: { currentDocument, pluginRenderers }, } = (0, react_1.useContext)(DocViewerProvider_1.DocViewerContext);
    const [CurrentRenderer, setCurrentRenderer] = (0, react_1.useState)();
    (0, react_1.useEffect)(() => {
        if (!currentDocument)
            return;
        if (!currentDocument.fileType) {
            setCurrentRenderer(undefined);
            return;
        }
        const matchingRenderers = [];
        pluginRenderers === null || pluginRenderers === void 0 ? void 0 : pluginRenderers.forEach((r) => {
            if (currentDocument.fileType === undefined)
                return;
            if (r.fileTypes.indexOf(currentDocument.fileType) >= 0) {
                matchingRenderers.push(r);
            }
        });
        const [SelectedRenderer] = matchingRenderers.sort((a, b) => b.weight - a.weight);
        if (SelectedRenderer && SelectedRenderer !== undefined) {
            setCurrentRenderer(() => SelectedRenderer);
        }
        else {
            setCurrentRenderer(null);
        }
    }, [currentDocument, pluginRenderers]);
    return { CurrentRenderer };
};
exports.useRendererSelector = useRendererSelector;
