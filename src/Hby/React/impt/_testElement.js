exports._testElement = () => {
  var React = require("react");
  return (
    <div
      style={{
        height: "100%",
        width: "100%",
        border: 1,
        borderStyle: "solid",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        boxSizing: "border-box",
      }}
    >
      测试元素
    </div>
  );
};
