exports._mkHtmlE = (builder) => {
  var React = require("react");
  return React.createElement(
    builder.tag,
    builder.attr,
    builder.child == null
      ? null
      : builder.child.map((a, i) => ({ ...a, key: i }))
  );
};
