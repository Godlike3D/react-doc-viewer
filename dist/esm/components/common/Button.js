"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ButtonSecondary = exports.ButtonPrimary = exports.LinkButton = exports.Button = exports.ButtonSecondaryStyle = exports.ButtonPrimaryStyle = void 0;
const styled_components_1 = __importStar(require("styled-components"));
exports.ButtonPrimaryStyle = (0, styled_components_1.css) `
  background-color: ${(props) => props.theme.primary};
  color: ${(props) => props.theme.textPrimary};
`;
exports.ButtonSecondaryStyle = (0, styled_components_1.css) `
  background-color: ${(props) => props.theme.secondary};
  color: ${(props) => props.theme.textSecondary};
`;
exports.Button = styled_components_1.default.button `
  ${exports.ButtonPrimaryStyle}
  display: flex;
  justify-content: center;
  align-items: center;
  width: 35px;
  height: 35px;
  padding: 0;
  margin: 0 0 0 5px;
  text-align: center;
  font-size: 18px;
  border: 0;
  outline: none;
  cursor: pointer;
  text-decoration: none;
  border-radius: 35px;
  opacity: ${(props) => (props.disabled ? 0.4 : 1)};
  pointer-events: ${(props) => (props.disabled ? "none" : "all")};
  box-shadow: 2px 2px 3px #00000033;

  @media (max-width: 768px) {
    width: 30px;
    height: 30px;
    font-size: 15px;
  }
`;
exports.LinkButton = styled_components_1.default.a `
  display: flex;
  justify-content: center;
  align-items: center;
  border: 0;
  outline: none;
  cursor: pointer;
  text-decoration: none;
  border-radius: 35px;
  background-color: ${(props) => props.theme.primary};
  color: ${(props) => props.theme.textPrimary};
  box-shadow: 2px 2px 3px #00000033;

  width: 35px;
  height: 35px;
  font-size: 18px;
  @media (max-width: 768px) {
    width: 30px;
    height: 30px;
    font-size: 15px;
  }
`;
exports.ButtonPrimary = (0, styled_components_1.default)(exports.Button) ``;
exports.ButtonSecondary = (0, styled_components_1.default)(exports.Button) `
  ${exports.ButtonSecondaryStyle}
`;
