exports._setGridRowPlace = (j) => (b) => {
  var json = JSON.parse(j);
  return {
    ...b,
    style: {
      ...b.style,
      justifyContent: json,
    },
  };
};
