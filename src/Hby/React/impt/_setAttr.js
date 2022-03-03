exports._setAttr = (json) => (builder) => {
  var R = require("ramda");
  return R.mergeDeepRight(builder, { attr: json });
};
