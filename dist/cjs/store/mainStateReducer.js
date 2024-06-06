"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mainStateReducer = exports.initialState = void 0;
const actions_1 = require("./actions");
const i18n_1 = require("../i18n");
exports.initialState = {
    currentFileNo: 0,
    documents: [],
    documentLoading: true,
    currentDocument: undefined,
    rendererRect: undefined,
    config: {},
    pluginRenderers: [],
    language: i18n_1.defaultLanguage,
};
const mainStateReducer = (state = exports.initialState, action) => {
    switch (action.type) {
        case actions_1.SET_ALL_DOCUMENTS: {
            const { documents, initialActiveDocument } = action;
            return Object.assign(Object.assign({}, state), { documents, currentDocument: initialActiveDocument
                    ? initialActiveDocument
                    : documents[0] || null, currentFileNo: initialActiveDocument && documents.includes(initialActiveDocument)
                    ? documents.indexOf(initialActiveDocument)
                    : exports.initialState.currentFileNo });
        }
        case actions_1.SET_DOCUMENT_LOADING: {
            const { value } = action;
            return Object.assign(Object.assign({}, state), { documentLoading: value });
        }
        case actions_1.NEXT_DOCUMENT: {
            if (state.currentFileNo >= state.documents.length - 1)
                return state;
            const nextDocumentNo = state.currentFileNo + 1;
            if (state.onDocumentChange) {
                state.onDocumentChange(state.documents[nextDocumentNo]);
            }
            return Object.assign(Object.assign({}, state), { currentFileNo: nextDocumentNo, currentDocument: state.documents[nextDocumentNo], documentLoading: true });
        }
        case actions_1.PREVIOUS_DOCUMENT: {
            if (state.currentFileNo <= 0)
                return state;
            const prevDocumentNo = state.currentFileNo - 1;
            if (state.onDocumentChange) {
                state.onDocumentChange(state.documents[prevDocumentNo]);
            }
            return Object.assign(Object.assign({}, state), { currentFileNo: state.currentFileNo - 1, currentDocument: state.documents[prevDocumentNo], documentLoading: true });
        }
        case actions_1.UPDATE_CURRENT_DOCUMENT: {
            const { document } = action;
            return Object.assign(Object.assign({}, state), { currentDocument: document, currentFileNo: state.documents.findIndex((doc) => doc.uri === document.uri) });
        }
        case actions_1.SET_RENDERER_RECT: {
            const { rect } = action;
            return Object.assign(Object.assign({}, state), { rendererRect: rect });
        }
        case actions_1.SET_MAIN_CONFIG: {
            const { config } = action;
            return Object.assign(Object.assign({}, state), { config });
        }
        default:
            return state;
    }
};
exports.mainStateReducer = mainStateReducer;
