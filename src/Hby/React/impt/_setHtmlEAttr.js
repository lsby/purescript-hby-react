exports._setHtmlEAttr = (json) => (builder) => {
  return {
    tag: builder.tag,
    attr: {
      ...builder.attr,
      ...json,
    },
    child: builder.child,
  };
};
