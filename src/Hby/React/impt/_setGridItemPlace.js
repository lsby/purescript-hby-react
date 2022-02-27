exports._setGridItemPlace = (j1) => (j2) => (h) => {
  var React = require("react");
  var json1 = JSON.parse(j1);
  var json2 = JSON.parse(j2);
  var H = () => h;
  return (
    <div style={{ display: "grid", justifySelf: json1, alignSelf: json2 }}>
      <H></H>
    </div>
  );
};
