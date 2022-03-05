"use strict";

exports._htmlE = function (tag) {
  return function (arr) {
    return {
      tag: tag,
      attr: {},
      child: arr.length == 0 ? null : arr
    };
  };
};
"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

exports._mkHtmlE = function (builder) {
  var React = require("react");

  return React.createElement(builder.tag, builder.attr, Array.isArray(builder.child) ? builder.child.map(function (a, i) {
    return _objectSpread(_objectSpread({}, a), {}, {
      key: i
    });
  }) : builder.child);
};
"use strict";

exports._setAttr = function (json) {
  return function (builder) {
    var R = require("ramda");

    return R.mergeDeepRight(builder, {
      attr: json
    });
  };
};
"use strict";

exports._setStyle = function (json) {
  return function (builder) {
    var R = require("ramda");

    return R.mergeDeepRight(builder, {
      attr: {
        style: json
      }
    });
  };
};
"use strict";

exports._testElement = function () {
  return {
    tag: "div",
    attr: {
      style: {
        height: "100%",
        width: "100%",
        border: 1,
        borderStyle: "solid",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        boxSizing: "border-box"
      }
    },
    child: "测试元素"
  };
};
"use strict";

exports._text = function (str) {
  var React = require("react");

  return {
    tag: React.Fragment,
    attr: {},
    child: str
  };
};
