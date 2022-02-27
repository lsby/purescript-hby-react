exports._htmlE = (tag) => (hArr) => {
  return {
    tag,
    attr: {},
    child: hArr,
  };
};
