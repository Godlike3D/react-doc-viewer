"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setMainConfig = exports.setRendererRect = exports.updateCurrentDocument = exports.previousDocument = exports.nextDocument = exports.setDocumentLoading = exports.setAllDocuments = exports.SET_MAIN_CONFIG = exports.SET_RENDERER_RECT = exports.UPDATE_CURRENT_DOCUMENT = exports.PREVIOUS_DOCUMENT = exports.NEXT_DOCUMENT = exports.SET_DOCUMENT_LOADING = exports.SET_ALL_DOCUMENTS = void 0;
exports.SET_ALL_DOCUMENTS = "SET_ALL_DOCUMENTS";
exports.SET_DOCUMENT_LOADING = "SET_DOCUMENT_LOADING";
exports.NEXT_DOCUMENT = "NEXT_DOCUMENT";
exports.PREVIOUS_DOCUMENT = "PREVIOUS_DOCUMENT";
exports.UPDATE_CURRENT_DOCUMENT = "UPDATE_CURRENT_DOCUMENT";
exports.SET_RENDERER_RECT = "SET_RENDERER_RECT";
exports.SET_MAIN_CONFIG = "SET_MAIN_CONFIG";
const setAllDocuments = (documents, initialActiveDocument) => ({
    type: exports.SET_ALL_DOCUMENTS,
    documents,
    initialActiveDocument,
});
exports.setAllDocuments = setAllDocuments;
const setDocumentLoading = (value) => ({
    type: exports.SET_DOCUMENT_LOADING,
    value,
});
exports.setDocumentLoading = setDocumentLoading;
const nextDocument = () => ({ type: exports.NEXT_DOCUMENT });
exports.nextDocument = nextDocument;
const previousDocument = () => ({
    type: exports.PREVIOUS_DOCUMENT,
});
exports.previousDocument = previousDocument;
const updateCurrentDocument = (document) => ({ type: exports.UPDATE_CURRENT_DOCUMENT, document });
exports.updateCurrentDocument = updateCurrentDocument;
const setRendererRect = (rect) => ({
    type: exports.SET_RENDERER_RECT,
    rect,
});
exports.setRendererRect = setRendererRect;
const setMainConfig = (config) => ({
    type: exports.SET_MAIN_CONFIG,
    config,
});
exports.setMainConfig = setMainConfig;
