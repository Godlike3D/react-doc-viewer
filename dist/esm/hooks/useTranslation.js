"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useTranslation = void 0;
const react_1 = require("react");
const mustache_1 = __importDefault(require("mustache"));
const DocViewerProvider_1 = require("../store/DocViewerProvider");
const i18n_1 = require("../i18n");
const useTranslation = () => {
    const { state: { language }, } = (0, react_1.useContext)(DocViewerProvider_1.DocViewerContext);
    const defaultTranslations = i18n_1.locales[i18n_1.defaultLanguage];
    const t = (0, react_1.useCallback)((key, variables) => {
        const translations = i18n_1.locales[language];
        if (translations[key]) {
            return mustache_1.default.render(translations[key], variables);
        }
        if (defaultTranslations[key]) {
            return mustache_1.default.render(defaultTranslations[key], variables);
        }
        return key;
    }, [language, defaultTranslations]);
    return {
        t,
    };
};
exports.useTranslation = useTranslation;
