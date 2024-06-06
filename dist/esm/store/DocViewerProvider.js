"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocViewerProvider = exports.DocViewerContext = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const i18n_1 = require("../i18n");
const actions_1 = require("./actions");
const mainStateReducer_1 = require("./mainStateReducer");
const DocViewerContext = (0, react_1.createContext)({ state: mainStateReducer_1.initialState, dispatch: () => null });
exports.DocViewerContext = DocViewerContext;
const DocViewerProvider = (0, react_1.forwardRef)((props, ref) => {
    var _a;
    const { children, documents, config, pluginRenderers, prefetchMethod, requestHeaders, initialActiveDocument, language, activeDocument, onDocumentChange, } = props;
    const [state, dispatch] = (0, react_1.useReducer)(mainStateReducer_1.mainStateReducer, Object.assign(Object.assign({}, mainStateReducer_1.initialState), { documents: documents || [], currentDocument: documents && documents.length
            ? initialActiveDocument
                ? initialActiveDocument
                : documents[0]
            : undefined, config,
        pluginRenderers,
        prefetchMethod,
        requestHeaders, currentFileNo: initialActiveDocument
            ? (_a = documents.findIndex((doc) => doc === initialActiveDocument)) !== null && _a !== void 0 ? _a : 0
            : 0, language: language && i18n_1.locales[language] ? language : i18n_1.defaultLanguage, activeDocument,
        onDocumentChange }));
    (0, react_1.useEffect)(() => {
        dispatch((0, actions_1.setAllDocuments)(documents, initialActiveDocument));
        config && dispatch((0, actions_1.setMainConfig)(config));
    }, [documents, config, initialActiveDocument]);
    (0, react_1.useEffect)(() => {
        if (activeDocument) {
            dispatch((0, actions_1.updateCurrentDocument)(activeDocument));
        }
    }, [activeDocument]);
    (0, react_1.useImperativeHandle)(ref, () => ({
        prev() {
            dispatch((0, actions_1.previousDocument)());
        },
        next() {
            dispatch((0, actions_1.nextDocument)());
        },
    }), [dispatch]);
    return ((0, jsx_runtime_1.jsx)(DocViewerContext.Provider, { value: { state, dispatch }, children: children }));
});
exports.DocViewerProvider = DocViewerProvider;
