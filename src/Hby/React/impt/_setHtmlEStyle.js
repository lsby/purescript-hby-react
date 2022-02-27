exports._setHtmlEStyle = (json) => (builder) => {
  return {
    tag: builder.tag,
    attr: {
      ...builder.attr,
      style: {
        ...builder.style,
        ...json,
      },
    },
    child: builder.child,
  };
};
