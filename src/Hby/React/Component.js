"use strict";

exports._grid = function (hArr) {
  return {
    child: hArr
  };
};
"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

exports._mkGrid = function (b) {
  var React = require("react");

  var s = {
    display: "grid"
  };
  s = b.width ? _objectSpread(_objectSpread({}, s), {}, {
    width: getSize(b.width)
  }) : s;
  s = b.height ? _objectSpread(_objectSpread({}, s), {}, {
    height: getSize(b.height)
  }) : s;
  s = b.rowSize ? _objectSpread(_objectSpread({}, s), {}, {
    gridTemplateRows: getGridSize(b.rowSize)
  }) : s;
  s = b.colSize ? _objectSpread(_objectSpread({}, s), {}, {
    gridTemplateColumns: getGridSize(b.colSize)
  }) : s;
  s = b.rowGap ? _objectSpread(_objectSpread({}, s), {}, {
    gridRowGap: b.rowGap + "px"
  }) : s;
  s = b.colSize ? _objectSpread(_objectSpread({}, s), {}, {
    gridColumnGap: b.colSize + "px"
  }) : s;
  s = b.direction ? _objectSpread(_objectSpread({}, s), {}, {
    gridAutoFlow: b.direction
  }) : s;
  s = b.rowPlace ? _objectSpread(_objectSpread({}, s), {}, {
    justifyContent: b.rowPlace
  }) : s;
  s = b.colPlace ? _objectSpread(_objectSpread({}, s), {}, {
    alignContent: b.colPlace
  }) : s;
  return /*#__PURE__*/React.createElement("div", {
    style: s
  }, b.child.map(function (a, i) {
    var A = function A() {
      return a;
    };

    return /*#__PURE__*/React.createElement(A, {
      key: i
    });
  }));

  function getSize(size) {
    switch (size.constructor) {
      case "px":
        return size.value + "px";

      case "scale":
        return size.value + "%";
    }
  }

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
"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

exports._setGridColGap = function (j) {
  return function (b) {
    var json = JSON.parse(j);
    return _objectSpread(_objectSpread({}, b), {}, {
      colSize: json
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
      colPlace: json
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
      colSize: json
    });
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
      direction: json
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
      height: json
    });
  };
};
"use strict";

exports._setGridItemArea = function (s) {
  return function (e) {
    return function (h) {
      var React = require("react");

      var H = function H() {
        return h;
      };

      return /*#__PURE__*/React.createElement("div", {
        style: {
          display: "grid",
          gridRowStart: s.value1 + 1,
          gridRowEnd: e.value1 + 1,
          gridColumnStart: s.value0 + 1,
          gridColumnEnd: e.value0 + 1
        }
      }, /*#__PURE__*/React.createElement(H, null));
    };
  };
};
"use strict";

exports._setGridItemPlace = function (j1) {
  return function (j2) {
    return function (h) {
      var React = require("react");

      var json1 = JSON.parse(j1);
      var json2 = JSON.parse(j2);

      var H = function H() {
        return h;
      };

      return /*#__PURE__*/React.createElement("div", {
        style: {
          justifySelf: json1,
          alignSelf: json2
        }
      }, /*#__PURE__*/React.createElement(H, null));
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
      rowGap: json
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
      rowPlace: json
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
      rowSize: json
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
      width: json
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
