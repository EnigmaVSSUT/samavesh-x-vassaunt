import { ThemeProvider } from "@mui/material"
import useSVTheme from "./useSVTheme"

const SVTheme = ({ children }) => {
	const theme = useSVTheme()

	return (
		<ThemeProvider
			theme={theme}
		>
			{children}
		</ThemeProvider>
	)
}

export default SVTheme