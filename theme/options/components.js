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
};

export default componentsOptions;
