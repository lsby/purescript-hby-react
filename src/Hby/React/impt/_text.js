exports._text = (str) => {
  var React = require("react");
  return {
    tag: React.Fragment,
    attr: {},
    child: str,
  };
};
