exports._setGridColPlace = (j) => (b) => {
  var json = JSON.parse(j);
  return {
    ...b,
    style: {
      ...b.style,
      alignContent: json,
    },
  };
};
