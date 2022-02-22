exports._setGridItemArea = (s) => (e) => (h) => {
  var React = require("react");
  var H = () => h;
  return (
    <div
      style={{
        display: "grid",
        gridRowStart: s.value1 + 1,
        gridRowEnd: e.value1 + 1,
        gridColumnStart: s.value0 + 1,
        gridColumnEnd: e.value0 + 1,
      }}
    >
      <H></H>
    </div>
  );
};
