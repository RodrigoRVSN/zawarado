"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.tsx
var src_exports = {};
__export(src_exports, {
  Button: () => Button,
  Input: () => Input,
  Todo: () => Todo
});
module.exports = __toCommonJS(src_exports);

// src/Button/index.tsx
var import_jsx_runtime = require("react/jsx-runtime");
var Button = ({ title, ...rest }) => {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
    ...rest,
    className: "rounded-md flex w-full items-center justify-center border border-transparent bg-black px-8 py-3 text-base font-medium text-white no-underline hover:bg-gray-700 dark:bg-white dark:text-black dark:hover:bg-gray-300 md:py-3 md:px-10 md:text-lg md:leading-6",
    children: title
  });
};

// src/Input/index.tsx
var import_jsx_runtime2 = require("react/jsx-runtime");
var Input = ({ ...rest }) => {
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("input", {
    className: "bg-gray-300 p-2 rounded-lg",
    ...rest
  });
};

// src/Todo/index.tsx
var import_jsx_runtime3 = require("react/jsx-runtime");
var Todo = ({ text }) => /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("p", {
  className: "text-yellow-500 bg-gray-800 p-3 rounded-xl mb-4",
  children: text
});
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Button,
  Input,
  Todo
});
