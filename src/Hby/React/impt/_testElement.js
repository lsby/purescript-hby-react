exports._testElement = () => {
  return {
    tag: "div",
    attr: {
      style: {
        height: "100%",
        width: "100%",
        border: 1,
        borderStyle: "solid",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        boxSizing: "border-box",
      },
    },
    child: "测试元素",
  };
};
