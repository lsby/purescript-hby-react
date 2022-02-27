exports._mkGrid = (b) => {
  var React = require("react");
  return (
    <div style={b.style}>
      {b.child.map((a, i) => {
        var A = () => a;
        return <A key={i}></A>;
      })}
    </div>
  );
};
