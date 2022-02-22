exports._mkGrid = (b) => {
  var React = require("react");

  var s = { display: "grid" };
  s = b.width ? { ...s, width: getSize(b.width) } : s;
  s = b.height ? { ...s, height: getSize(b.height) } : s;
  s = b.rowSize ? { ...s, gridTemplateRows: getGridSize(b.rowSize) } : s;
  s = b.colSize ? { ...s, gridTemplateColumns: getGridSize(b.colSize) } : s;
  s = b.rowGap ? { ...s, gridRowGap: b.rowGap + "px" } : s;
  s = b.colSize ? { ...s, gridColumnGap: b.colSize + "px" } : s;
  s = b.direction ? { ...s, gridAutoFlow: b.direction } : s;
  s = b.rowPlace ? { ...s, justifyContent: b.rowPlace } : s;
  s = b.colPlace ? { ...s, alignContent: b.colPlace } : s;

  return (
    <div style={s}>
      {b.child.map((a, i) => {
        var A = () => a;
        return <A key={i}></A>;
      })}
    </div>
  );

  function getSize(size) {
    switch (size.constructor) {
      case "px":
        return size.value + "px";
      case "scale":
        return size.value + "%";
    }
  }
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
