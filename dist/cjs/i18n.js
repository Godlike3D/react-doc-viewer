"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.defaultLanguage = exports.locales = void 0;
const en_json_1 = __importDefault(require("./locales/en.json"));
const pl_json_1 = __importDefault(require("./locales/pl.json"));
const es_json_1 = __importDefault(require("./locales/es.json"));
const de_json_1 = __importDefault(require("./locales/de.json"));
const it_json_1 = __importDefault(require("./locales/it.json"));
const pt_json_1 = __importDefault(require("./locales/pt.json"));
const fr_json_1 = __importDefault(require("./locales/fr.json"));
const ar_json_1 = __importDefault(require("./locales/ar.json"));
const sr_json_1 = __importDefault(require("./locales/sr.json"));
const sr_cyr_json_1 = __importDefault(require("./locales/sr_cyr.json"));
const ja_json_1 = __importDefault(require("./locales/ja.json"));
const ru_json_1 = __importDefault(require("./locales/ru.json"));
const se_json_1 = __importDefault(require("./locales/se.json"));
exports.locales = {
    en: en_json_1.default,
    pl: pl_json_1.default,
    es: es_json_1.default,
    de: de_json_1.default,
    it: it_json_1.default,
    pt: pt_json_1.default,
    fr: fr_json_1.default,
    ar: ar_json_1.default,
    sr: sr_json_1.default,
    sr_cyr: sr_cyr_json_1.default,
    ja: ja_json_1.default,
    ru: ru_json_1.default,
    se: se_json_1.default,
};
exports.defaultLanguage = "en";
