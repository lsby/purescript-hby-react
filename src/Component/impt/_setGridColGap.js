exports._setGridColGap = (j) => (b) => {
  var json = JSON.parse(j);
  return {
    ...b,
    colSize: json,
  };
};
