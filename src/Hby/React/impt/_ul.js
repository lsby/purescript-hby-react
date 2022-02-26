exports._ul = (itemArr) => {
  var React = require("react");
  return (
    <ul>
      {itemArr.map((a) => (
        <li>{a}</li>
      ))}
    </ul>
  );
};
