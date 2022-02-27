exports._htmlE = (tag) => (hArr) => {
  return {
    tag,
    attr: {},
    child: hArr.length == 0 ? null : hArr,
  };
};
