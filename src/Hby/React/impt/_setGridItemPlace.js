exports._setGridItemPlace = (j1) => (j2) => (style) => (h) => {
  var React = require("react");
  return React.createElement(
    "div",
    {
      style: {
        display: "grid",
        justifySelf: JSON.parse(j1),
        alignSelf: JSON.parse(j2),
        ...style,
      },
    },
    h
  );
};
