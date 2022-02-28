exports._mkGrid = (b) => {
  var React = require("react");
  return React.createElement(
    "div",
    {
      overflow: "auto",
      style: b.style,
    },
    b.child.map((a, i) => ({ ...a, key: i }))
  );
};
