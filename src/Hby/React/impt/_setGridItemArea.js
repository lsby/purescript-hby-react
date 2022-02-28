exports._setGridItemArea = (s) => (e) => (h) => {
  var React = require("react");
  return React.createElement(
    "div",
    {
      style: {
        display: "grid",
        overflow: "auto",
        gridRowStart: s.value1 + 1,
        gridRowEnd: e.value1 + 1,
        gridColumnStart: s.value0 + 1,
        gridColumnEnd: e.value0 + 1,
      },
    },
    h
  );
};
