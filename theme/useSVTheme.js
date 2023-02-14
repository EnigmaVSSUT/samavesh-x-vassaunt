import { createTheme } from "@mui/material";
import paletteOptions from "./options/palette";
import componentsOptions from "./options/components";
import typographyOptions from "./options/typography";

const useSVTheme = () => {
  const theme = createTheme({
    components: componentsOptions,
    palette: paletteOptions,
    typography: typographyOptions,
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 768,
        lg: 1070,
        xl: 1536,
      },
    },
  });

  return theme;
};

export default useSVTheme;
