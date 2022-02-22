exports._setGridDirection = (j) => (b) => {
  var json = JSON.parse(j);
  return {
    ...b,
    direction: json,
  };
};
