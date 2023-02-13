const componentsOptions = {
  MuiButton: {
    defaultProps: {
      disableRipple: true,
      disableElevation: true,
    },
    styleOverrides: {
      root: {
        width: "fit-content",
        backgroundColor: "#C0000A",
        borderRadius: "0.3rem !important",
      },
    },
  },
  MuiTab: {
    defaultProps: {
      disableRipple: true,
    },
  },
};

export default componentsOptions;
