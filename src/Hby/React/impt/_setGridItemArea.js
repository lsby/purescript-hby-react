exports._setGridItemArea = (s) => (e) => (h) => {
  var React = require("react");
  console.log(s);
  var H = () => h;
  return (
    <div
      style={{
        gridRowStart: s.value1 + 1,
        gridRowEnd: e.value1 + 1,
        gridColumnStart: s.value0 + 1,
        gridColumnEnd: e.value0 + 1,
        display: "grid",
      }}
    >
      <H></H>
    </div>
  );
};
