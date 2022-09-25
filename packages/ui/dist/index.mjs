// src/Button/index.tsx
import { jsx } from "react/jsx-runtime";
var Button = ({ title, ...rest }) => {
  return /* @__PURE__ */ jsx("button", {
    ...rest,
    className: "rounded-md flex w-full items-center justify-center border border-transparent bg-black px-8 py-3 text-base font-medium text-white no-underline hover:bg-gray-700 dark:bg-white dark:text-black dark:hover:bg-gray-300 md:py-3 md:px-10 md:text-lg md:leading-6",
    children: title
  });
};

// src/Input/index.tsx
import { jsx as jsx2 } from "react/jsx-runtime";
var Input = ({ value, ...rest }) => {
  return /* @__PURE__ */ jsx2("input", {
    className: "bg-gray-300 p-2 rounded-lg",
    ...rest
  });
};

// src/Todo/index.tsx
import { jsx as jsx3 } from "react/jsx-runtime";
var Todo = ({ text }) => /* @__PURE__ */ jsx3("p", {
  className: "text-yellow-500 bg-gray-800 p-3 rounded-xl mb-4",
  children: text
});
export {
  Button,
  Input,
  Todo
};
