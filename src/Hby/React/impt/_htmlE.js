exports._htmlE = (tag) => (arr) => {
  return {
    tag,
    attr: {},
    child: arr.length == 0 ? null : arr,
  };
};
