exports._htmlE = (tag) => (arr) => {
  var React = require("react");
  return {
    tag,
    attr: {},
    child: arr.length == 0 ? null : arr.map((a) => _mkHtmlE(a)),
  };
  function _mkHtmlE(builder) {
    return React.createElement(
      builder.tag,
      builder.attr,
      Array.isArray(builder.child)
        ? builder.child.map((a, i) => ({ ...a, key: i }))
        : builder.child
    );
  }
};
