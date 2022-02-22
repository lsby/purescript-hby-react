exports._setGridRowPlace = (j) => (b) => {
  var json = JSON.parse(j);
  return {
    ...b,
    rowPlace: json,
  };
};
