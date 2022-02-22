// render :: HtmlElement -> Task Unit
exports.render = (e) => () => {
  var ReactDOM = require("react-dom");
  return new Promise((res, rej) => {
    ReactDOM.render(e, document.getElementById("app"));
    res();
  });
};
