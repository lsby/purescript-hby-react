"use strict";

exports._grid = function (hArr) {
  return {
    child: hArr,
    style: {
      display: "grid"
    }
  };
};
"use strict";

exports._htmlE = function (tag) {
  return function (hArr) {
    return {
      tag: tag,
      attr: {},
      child: hArr.length == 0 ? null : hArr
    };
  };
};
"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

exports._mkGrid = function (b) {
  var React = require("react");

  return React.createElement("div", {
    style: _objectSpread({
      overflow: "auto"
    }, b.style)
  }, b.child.map(function (a, i) {
    return _objectSpread(_objectSpread({}, a), {}, {
      key: i
    });
  }));
};
"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

exports._mkHtmlE = function (builder) {
  var React = require("react");

  return React.createElement(builder.tag, builder.attr, builder.child == null ? null : builder.child.map(function (a, i) {
    return _objectSpread(_objectSpread({}, a), {}, {
      key: i
    });
  }));
};
"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

exports._setGridColGap = function (j) {
  return function (b) {
    var json = JSON.parse(j);
    return _objectSpread(_objectSpread({}, b), {}, {
      style: _objectSpread(_objectSpread({}, b.style), {}, {
        gridColumnGap: json + "px"
      })
    });
  };
};
"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

exports._setGridColPlace = function (j) {
  return function (b) {
    var json = JSON.parse(j);
    return _objectSpread(_objectSpread({}, b), {}, {
      style: _objectSpread(_objectSpread({}, b.style), {}, {
        alignContent: json
      })
    });
  };
};
"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

exports._setGridColSize = function (j) {
  return function (b) {
    var json = JSON.parse(j);
    return _objectSpread(_objectSpread({}, b), {}, {
      style: _objectSpread(_objectSpread({}, b.style), {}, {
        gridTemplateColumns: getGridSize(json)
      })
    });

    function getGridSize(arr) {
      return arr.map(getGridSizeItem).join(" ");
    }

    function getGridSizeItem(size) {
      switch (size.constructor) {
        case "px":
          return size.value + "px";

        case "scale":
          return size.value + "%";

        case "fr":
          return size.value + "fr";

        case "minmax":
          return "minmax(".concat(getGridSize(size.min), ", ").concat(getGridSize(size.max), ")");

        case "auto":
          return "auto";

        case "repeat":
          return "repeat(".concat(size.n, ", ").concat(getGridSize(size.value), ")");

        case "fill":
          return "auto-fill";
      }
    }
  };
};
"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

exports._setGridDirection = function (j) {
  return function (b) {
    var json = JSON.parse(j);
    return _objectSpread(_objectSpread({}, b), {}, {
      style: _objectSpread(_objectSpread({}, b.style), {}, {
        gridAutoFlow: json
      })
    });
  };
};
"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

exports._setGridHeight = function (j) {
  return function (b) {
    var json = JSON.parse(j);
    return _objectSpread(_objectSpread({}, b), {}, {
      style: _objectSpread(_objectSpread({}, b.style), {}, {
        height: getSize(json)
      })
    });

    function getSize(size) {
      switch (size.constructor) {
        case "px":
          return size.value + "px";

        case "scale":
          return size.value + "%";
      }
    }
  };
};
"use strict";

exports._setGridItemArea = function (s) {
  return function (e) {
    return function (h) {
      var React = require("react");

      return React.createElement("div", {
        style: {
          display: "grid",
          overflow: "auto",
          gridRowStart: s.value1 + 1,
          gridRowEnd: e.value1 + 1,
          gridColumnStart: s.value0 + 1,
          gridColumnEnd: e.value0 + 1
        }
      }, h);
    };
  };
};
"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

exports._setGridItemPlace = function (j1) {
  return function (j2) {
    return function (style) {
      return function (h) {
        var React = require("react");

        return React.createElement("div", {
          style: _objectSpread({
            display: "grid",
            overflow: "auto",
            justifySelf: JSON.parse(j1),
            alignSelf: JSON.parse(j2)
          }, style)
        }, h);
      };
    };
  };
};
"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

exports._setGridRowGap = function (j) {
  return function (b) {
    var json = JSON.parse(j);
    return _objectSpread(_objectSpread({}, b), {}, {
      style: _objectSpread(_objectSpread({}, b.style), {}, {
        rowGap: json + "px"
      })
    });
  };
};
"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

exports._setGridRowPlace = function (j) {
  return function (b) {
    var json = JSON.parse(j);
    return _objectSpread(_objectSpread({}, b), {}, {
      style: _objectSpread(_objectSpread({}, b.style), {}, {
        justifyContent: json
      })
    });
  };
};
"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

exports._setGridRowSize = function (j) {
  return function (b) {
    var json = JSON.parse(j);
    return _objectSpread(_objectSpread({}, b), {}, {
      style: _objectSpread(_objectSpread({}, b.style), {}, {
        gridTemplateRows: getGridSize(json)
      })
    });

    function getGridSize(arr) {
      return arr.map(getGridSizeItem).join(" ");
    }

    function getGridSizeItem(size) {
      switch (size.constructor) {
        case "px":
          return size.value + "px";

        case "scale":
          return size.value + "%";

        case "fr":
          return size.value + "fr";

        case "minmax":
          return "minmax(".concat(getGridSize(size.min), ", ").concat(getGridSize(size.max), ")");

        case "auto":
          return "auto";

        case "repeat":
          return "repeat(".concat(size.n, ", ").concat(getGridSize(size.value), ")");

        case "fill":
          return "auto-fill";
      }
    }
  };
};
"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

exports._setGridStyle = function (json) {
  return function (builder) {
    return _objectSpread(_objectSpread({}, builder), {}, {
      style: _objectSpread(_objectSpread({}, builder.style), json)
    });
  };
};
"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

exports._setGridWidth = function (j) {
  return function (b) {
    var json = JSON.parse(j);
    return _objectSpread(_objectSpread({}, b), {}, {
      style: _objectSpread(_objectSpread({}, b.style), {}, {
        width: getSize(json)
      })
    });

    function getSize(size) {
      switch (size.constructor) {
        case "px":
          return size.value + "px";

        case "scale":
          return size.value + "%";
      }
    }
  };
};
"use strict";

exports._setHtmlEAttr = function (json) {
  return function (builder) {
    var R = require("ramda");

    return R.mergeDeepRight(builder, {
      attr: json
    });
  };
};
"use strict";

exports._setHtmlEStyle = function (json) {
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
  var React = require("react");

  return /*#__PURE__*/React.createElement("div", {
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
  }, "\u6D4B\u8BD5\u5143\u7D20");
};
"use strict";

exports._text = function (str) {
  var React = require("react");

  return /*#__PURE__*/React.createElement(React.Fragment, null, str);
};
