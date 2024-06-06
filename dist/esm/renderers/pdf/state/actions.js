"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setCurrentPage = exports.SET_CURRENT_PAGE = exports.setNumPages = exports.SET_NUM_PAGES = exports.setPDFPaginated = exports.SET_PDF_PAGINATED = exports.setZoomLevel = exports.SET_ZOOM_LEVEL = void 0;
exports.SET_ZOOM_LEVEL = "SET_ZOOM_LEVEL";
const setZoomLevel = (value) => ({
    type: exports.SET_ZOOM_LEVEL,
    value,
});
exports.setZoomLevel = setZoomLevel;
exports.SET_PDF_PAGINATED = "SET_PDF_PAGINATED";
const setPDFPaginated = (value) => ({
    type: exports.SET_PDF_PAGINATED,
    value,
});
exports.setPDFPaginated = setPDFPaginated;
exports.SET_NUM_PAGES = "SET_NUM_PAGES";
const setNumPages = (value) => ({
    type: exports.SET_NUM_PAGES,
    value,
});
exports.setNumPages = setNumPages;
exports.SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const setCurrentPage = (value) => ({
    type: exports.SET_CURRENT_PAGE,
    value,
});
exports.setCurrentPage = setCurrentPage;
