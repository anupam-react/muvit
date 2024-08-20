import {
  InputGroupContext_default
} from "./chunk-R4MZAAII.js";
import {
  require_classnames,
  require_jsx_runtime,
  useBootstrapPrefix
} from "./chunk-XBEDYVJE.js";
import {
  require_react
} from "./chunk-QY3QVPNU.js";
import {
  __toESM
} from "./chunk-LQ2VYIYD.js";

// node_modules/react-bootstrap/esm/InputGroup.js
var import_classnames3 = __toESM(require_classnames());
var React4 = __toESM(require_react());
var import_react2 = __toESM(require_react());

// node_modules/react-bootstrap/esm/FormCheckInput.js
var import_classnames = __toESM(require_classnames());
var React2 = __toESM(require_react());
var import_react = __toESM(require_react());

// node_modules/react-bootstrap/esm/FormContext.js
var React = __toESM(require_react());
var FormContext = React.createContext({});
var FormContext_default = FormContext;

// node_modules/react-bootstrap/esm/FormCheckInput.js
var import_jsx_runtime = __toESM(require_jsx_runtime());
var FormCheckInput = React2.forwardRef(({
  id,
  bsPrefix,
  className,
  type = "checkbox",
  isValid = false,
  isInvalid = false,
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  as: Component = "input",
  ...props
}, ref) => {
  const {
    controlId
  } = (0, import_react.useContext)(FormContext_default);
  bsPrefix = useBootstrapPrefix(bsPrefix, "form-check-input");
  return (0, import_jsx_runtime.jsx)(Component, {
    ...props,
    ref,
    type,
    id: id || controlId,
    className: (0, import_classnames.default)(className, bsPrefix, isValid && "is-valid", isInvalid && "is-invalid")
  });
});
FormCheckInput.displayName = "FormCheckInput";
var FormCheckInput_default = FormCheckInput;

// node_modules/react-bootstrap/esm/InputGroupText.js
var React3 = __toESM(require_react());
var import_classnames2 = __toESM(require_classnames());
var import_jsx_runtime2 = __toESM(require_jsx_runtime());
var InputGroupText = React3.forwardRef(({
  className,
  bsPrefix,
  as: Component = "span",
  ...props
}, ref) => {
  bsPrefix = useBootstrapPrefix(bsPrefix, "input-group-text");
  return (0, import_jsx_runtime2.jsx)(Component, {
    ref,
    className: (0, import_classnames2.default)(className, bsPrefix),
    ...props
  });
});
InputGroupText.displayName = "InputGroupText";
var InputGroupText_default = InputGroupText;

// node_modules/react-bootstrap/esm/InputGroup.js
var import_jsx_runtime3 = __toESM(require_jsx_runtime());
var InputGroupCheckbox = (props) => (0, import_jsx_runtime3.jsx)(InputGroupText_default, {
  children: (0, import_jsx_runtime3.jsx)(FormCheckInput_default, {
    type: "checkbox",
    ...props
  })
});
var InputGroupRadio = (props) => (0, import_jsx_runtime3.jsx)(InputGroupText_default, {
  children: (0, import_jsx_runtime3.jsx)(FormCheckInput_default, {
    type: "radio",
    ...props
  })
});
var InputGroup = React4.forwardRef(({
  bsPrefix,
  size,
  hasValidation,
  className,
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  as: Component = "div",
  ...props
}, ref) => {
  bsPrefix = useBootstrapPrefix(bsPrefix, "input-group");
  const contextValue = (0, import_react2.useMemo)(() => ({}), []);
  return (0, import_jsx_runtime3.jsx)(InputGroupContext_default.Provider, {
    value: contextValue,
    children: (0, import_jsx_runtime3.jsx)(Component, {
      ref,
      ...props,
      className: (0, import_classnames3.default)(className, bsPrefix, size && `${bsPrefix}-${size}`, hasValidation && "has-validation")
    })
  });
});
InputGroup.displayName = "InputGroup";
var InputGroup_default = Object.assign(InputGroup, {
  Text: InputGroupText_default,
  Radio: InputGroupRadio,
  Checkbox: InputGroupCheckbox
});

export {
  FormContext_default,
  FormCheckInput_default,
  InputGroup_default
};
//# sourceMappingURL=chunk-JV27Z64G.js.map
