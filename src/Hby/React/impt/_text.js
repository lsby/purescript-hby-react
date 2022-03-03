exports._text = (str) => {
  return {
    tag: "span",
    attr: {},
    child: str,
  };
};
