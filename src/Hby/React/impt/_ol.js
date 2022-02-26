exports._ol = (itemArr) => {
  var React = require("react");
  return (
    <ol>
      {itemArr.map((a) => (
        <li>{a}</li>
      ))}
    </ol>
  );
};
