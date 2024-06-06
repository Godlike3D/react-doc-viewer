"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useDocumentLoader = void 0;
const react_1 = require("react");
const DocViewerProvider_1 = require("../store/DocViewerProvider");
const actions_1 = require("../store/actions");
const fileLoaders_1 = require("../utils/fileLoaders");
const useRendererSelector_1 = require("./useRendererSelector");
/**
 * Custom Hook for loading the current document into context
 */
const useDocumentLoader = () => {
    const { state, dispatch } = (0, react_1.useContext)(DocViewerProvider_1.DocViewerContext);
    const { currentFileNo, currentDocument, prefetchMethod } = state;
    const { CurrentRenderer } = (0, useRendererSelector_1.useRendererSelector)();
    const documentURI = (currentDocument === null || currentDocument === void 0 ? void 0 : currentDocument.uri) || "";
    (0, react_1.useEffect)(() => {
        if (!currentDocument)
            return;
        if (currentDocument.fileType !== undefined)
            return;
        const controller = new AbortController();
        const { signal } = controller;
        fetch(documentURI, {
            method: prefetchMethod || documentURI.startsWith("blob:") ? "GET" : "HEAD",
            signal,
            headers: state === null || state === void 0 ? void 0 : state.requestHeaders,
        })
            .then((response) => {
            const contentTypeRaw = response.headers.get("content-type");
            const contentTypes = (contentTypeRaw === null || contentTypeRaw === void 0 ? void 0 : contentTypeRaw.split(";")) || [];
            const contentType = contentTypes.length ? contentTypes[0] : undefined;
            dispatch((0, actions_1.updateCurrentDocument)(Object.assign(Object.assign({}, currentDocument), { fileType: contentType || undefined })));
        })
            .catch((error) => {
            if ((error === null || error === void 0 ? void 0 : error.name) !== "AbortError") {
                throw error;
            }
        });
        return () => {
            controller.abort();
        };
    }, 
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [currentFileNo, documentURI, currentDocument]);
    (0, react_1.useEffect)(() => {
        var _a;
        if (!currentDocument || CurrentRenderer === undefined)
            return;
        const controller = new AbortController();
        const { signal } = controller;
        const fileLoaderComplete = (fileReader) => {
            if (!currentDocument || !fileReader) {
                dispatch((0, actions_1.setDocumentLoading)(false));
                return;
            }
            let updatedDocument = Object.assign({}, currentDocument);
            if (fileReader.result !== null) {
                updatedDocument.fileData = fileReader.result;
            }
            dispatch((0, actions_1.updateCurrentDocument)(updatedDocument));
            dispatch((0, actions_1.setDocumentLoading)(false));
        };
        const loaderFunctionProps = {
            documentURI,
            signal,
            fileLoaderComplete,
            headers: state === null || state === void 0 ? void 0 : state.requestHeaders,
        };
        if (CurrentRenderer === null) {
            dispatch((0, actions_1.setDocumentLoading)(false));
        }
        else if (CurrentRenderer.fileLoader !== undefined) {
            (_a = CurrentRenderer.fileLoader) === null || _a === void 0 ? void 0 : _a.call(CurrentRenderer, loaderFunctionProps);
        }
        else {
            (0, fileLoaders_1.defaultFileLoader)(loaderFunctionProps);
        }
        return () => {
            controller.abort();
        };
        /* eslint-disable react-hooks/exhaustive-deps */
    }, [CurrentRenderer, currentFileNo]);
    return { state, dispatch, CurrentRenderer };
};
exports.useDocumentLoader = useDocumentLoader;
