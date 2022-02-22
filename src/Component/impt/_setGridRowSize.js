exports._setGridRowSize = (j) => (b) => {
  var json = JSON.parse(j);
  return {
    ...b,
    rowSize: json,
  };
};
