exports._setGridHeight = (j) => (b) => {
  var json = JSON.parse(j);
  return {
    ...b,
    style: {
      ...b.style,
      height: getSize(json),
    },
  };
  function getSize(size) {
    switch (size.constructor) {
      case "px":
        return size.value + "px";
      case "scale":
        return size.value + "%";
    }
  }
};
