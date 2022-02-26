exports._button = (cb) => (str) => {
  var React = require("react");
  return <button onClick={cb}>{str}</button>;
};
