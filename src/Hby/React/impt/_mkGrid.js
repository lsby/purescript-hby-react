exports._mkGrid = (b) => {
  var React = require("react");
  return React.createElement(
    "div",
    {
      style: {
        overflow: "auto",
        ...b.style,
      },
    },
    b.child.map((a, i) => ({ ...a, key: i }))
  );
};
