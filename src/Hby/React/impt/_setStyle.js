exports._setStyle = (json) => (builder) => {
  var R = require("ramda");
  return R.mergeDeepRight(builder, { attr: { style: json } });
};
