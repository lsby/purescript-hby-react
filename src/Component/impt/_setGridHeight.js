exports._setGridHeight = (j) => (b) => {
  var json = JSON.parse(j);
  return {
    ...b,
    height: json,
  };
};
