exports._setGridDirection = (j) => (b) => {
  var json = JSON.parse(j);
  return {
    ...b,
    style: {
      ...b.style,
      gridAutoFlow: json,
    },
  };
};
