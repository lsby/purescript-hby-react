exports._mkHtmlE = (builder) => {
  var React = require("react");
  return React.createElement(
    builder.tag,
    builder.attr,
    Array.isArray(builder.child)
      ? builder.child.map((a, i) => ({ ...a, key: i }))
      : builder.child
  );
};
