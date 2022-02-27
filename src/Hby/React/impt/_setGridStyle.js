exports._setGridStyle = (json) => (builder) => {
  return {
    ...builder,
    style: {
      ...builder.style,
      ...json,
    },
  };
};
