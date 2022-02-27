exports._setGridWidth = (j) => (b) => {
  var json = JSON.parse(j);
  return {
    ...b,
    style: {
      ...b.style,
      width: getSize(json),
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
