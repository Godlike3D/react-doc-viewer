"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const styled_components_1 = __importDefault(require("styled-components"));
const papaparse_1 = __importDefault(require("papaparse"));
const fileLoaders_1 = require("../../utils/fileLoaders");
const CSVRenderer = ({ mainState: { currentDocument, config }, }) => {
    const [rows, setRows] = (0, react_1.useState)([]);
    (0, react_1.useEffect)(() => {
        var _a, _b;
        if (currentDocument === null || currentDocument === void 0 ? void 0 : currentDocument.fileData) {
            const parseResult = papaparse_1.default.parse(currentDocument.fileData, {
                delimiter: (_a = config === null || config === void 0 ? void 0 : config.csvDelimiter) !== null && _a !== void 0 ? _a : ",",
            });
            if (!((_b = parseResult.errors) === null || _b === void 0 ? void 0 : _b.length) && parseResult.data) {
                setRows(parseResult.data);
            }
        }
    }, [currentDocument, config === null || config === void 0 ? void 0 : config.csvDelimiter]);
    if (!rows.length) {
        return null;
    }
    return ((0, jsx_runtime_1.jsx)(Container, { children: (0, jsx_runtime_1.jsxs)(Table, { children: [(0, jsx_runtime_1.jsx)("thead", { children: (0, jsx_runtime_1.jsx)("tr", { children: rows[0].map((column) => ((0, jsx_runtime_1.jsx)("th", { children: column }, column))) }) }), (0, jsx_runtime_1.jsx)("tbody", { children: rows.slice(1, rows.length).map((row) => ((0, jsx_runtime_1.jsx)("tr", { children: row.map((column) => ((0, jsx_runtime_1.jsx)("td", { children: column }, column))) }, row.join("")))) })] }) }));
};
exports.default = CSVRenderer;
CSVRenderer.fileTypes = ["csv", "text/csv"];
CSVRenderer.weight = 0;
CSVRenderer.fileLoader = fileLoaders_1.textFileLoader;
const Container = styled_components_1.default.div `
  width: 100%;
`;
const Table = styled_components_1.default.table `
  width: 100%;
  text-align: left;

  th,
  td {
    padding: 5px 10px;

    &:empty {
      display: none;
    }
  }
`;
