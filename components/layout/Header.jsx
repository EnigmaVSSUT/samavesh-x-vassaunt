import { Typography, Stack, Button } from "@mui/material"

const Header = () => {
	return (
		<Stack
			padding='10px 32px'
			direction='row'
			justifyContent='space-between'
		>
			<Typography
				variant='h1'
			>
				SAMAVESH X VASSAUNT
			</Typography>
			<Button
				variant='contained'
			>
				Register
			</Button>
		</Stack>
	)
}

export default Header