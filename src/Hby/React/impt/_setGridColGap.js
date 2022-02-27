exports._setGridColGap = (j) => (b) => {
  var json = JSON.parse(j);
  return {
    ...b,
    style: {
      ...b.style,
      gridColumnGap: json + "px",
    },
  };
};
