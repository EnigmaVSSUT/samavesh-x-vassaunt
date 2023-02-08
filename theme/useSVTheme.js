import { createTheme } from "@mui/material"
import paletteOptions from "./options/palette"
import componentsOptions from "./options/components"
import typographyOptions from "./options/typography"

const useSVTheme = () => {
	const theme = createTheme({
		components: componentsOptions,
		palette: paletteOptions,
		typography: typographyOptions
	})

	return theme
}

export default useSVTheme