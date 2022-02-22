exports._setGridWidth = (j) => (b) => {
  var json = JSON.parse(j);
  return {
    ...b,
    width: json,
  };
};
