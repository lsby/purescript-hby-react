exports._mkHtmlE = (builder) => {
  var React = require("react");
  return React.createElement(
    builder.tag,
    builder.attr,
    builder.child.map((a, i) => ({ ...a, key: i }))
  );
};
