exports._setGridRowSize = (j) => (b) => {
  var json = JSON.parse(j);
  return {
    ...b,
    style: {
      ...b.style,
      gridTemplateRows: getGridSize(json),
    },
  };
  function getGridSize(arr) {
    return arr.map(getGridSizeItem).join(" ");
  }
  function getGridSizeItem(size) {
    switch (size.constructor) {
      case "px":
        return size.value + "px";
      case "scale":
        return size.value + "%";
      case "fr":
        return size.value + "fr";
      case "minmax":
        return `minmax(${getGridSize(size.min)}, ${getGridSize(size.max)})`;
      case "auto":
        return "auto";
      case "repeat":
        return `repeat(${size.n}, ${getGridSize(size.value)})`;
      case "fill":
        return `auto-fill`;
    }
  }
};
