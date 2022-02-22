exports._setGridRowGap = (j) => (b) => {
  var json = JSON.parse(j);
  return {
    ...b,
    rowGap: json,
  };
};
