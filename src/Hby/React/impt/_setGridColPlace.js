exports._setGridColPlace = (j) => (b) => {
  var json = JSON.parse(j);
  return {
    ...b,
    colPlace: json,
  };
};
