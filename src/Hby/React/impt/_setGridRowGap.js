exports._setGridRowGap = (j) => (b) => {
  var json = JSON.parse(j);
  return {
    ...b,
    style: {
      ...b.style,
      rowGap: json + "px",
    },
  };
};
