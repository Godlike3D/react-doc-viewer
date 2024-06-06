"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.defaultFileLoader = exports.binaryStringFileLoader = exports.textFileLoader = exports.dataURLFileLoader = exports.arrayBufferFileLoader = void 0;
const _fileLoader = ({ documentURI, signal, fileLoaderComplete, readerTypeFunction, headers, }) => {
    return fetch(documentURI, { signal, headers })
        .then((res) => __awaiter(void 0, void 0, void 0, function* () {
        const blob = yield res.blob();
        const fileReader = new FileReader();
        fileReader.addEventListener("loadend", () => fileLoaderComplete(fileReader));
        switch (readerTypeFunction) {
            case "arrayBuffer":
                fileReader.readAsArrayBuffer(blob);
                break;
            case "binaryString":
                fileReader.readAsBinaryString(blob);
                break;
            case "dataURL":
                fileReader.readAsDataURL(blob);
                break;
            case "text":
                fileReader.readAsText(blob);
                break;
            default:
                break;
        }
    }))
        .catch((e) => {
        return e;
    });
};
const arrayBufferFileLoader = (props) => {
    return _fileLoader(Object.assign(Object.assign({}, props), { readerTypeFunction: "arrayBuffer" }));
};
exports.arrayBufferFileLoader = arrayBufferFileLoader;
const dataURLFileLoader = (props) => {
    return _fileLoader(Object.assign(Object.assign({}, props), { readerTypeFunction: "dataURL" }));
};
exports.dataURLFileLoader = dataURLFileLoader;
const textFileLoader = (props) => {
    return _fileLoader(Object.assign(Object.assign({}, props), { readerTypeFunction: "text" }));
};
exports.textFileLoader = textFileLoader;
const binaryStringFileLoader = (props) => {
    return _fileLoader(Object.assign(Object.assign({}, props), { readerTypeFunction: "binaryString" }));
};
exports.binaryStringFileLoader = binaryStringFileLoader;
exports.defaultFileLoader = exports.dataURLFileLoader;
