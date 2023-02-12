import { Typography, Stack, Button, AppBar, Box } from "@mui/material"
import Link from "next/link";
const Header = () => {
	return (
		<Stack
			padding='10px 32px'
			direction='row'
			justifyContent='space-between'
		>
			<AppBar sx={{
				backgroundColor: '#F3EEE8;',
				display: "flex",
				flexDirection: "row",
				justifyContent: "space-between",
				alignItems: "center",
				padding: "10px 32px",
				gap: "20px",
				isolation: "isolate",
			}} elevation={0}>
				<Typography sx={{ color: "#C0000A" }}>SAMAVESH X VASSAUNT</Typography>
				<Box sx={{
					display: "flex",
					flexDirection: "row",

					padding: "0px",
					gap: "16px", color: "#000000", alignItems: "center"
				}}>
					<Typography>
						<Link href="/theme">THEME</Link>
					</Typography>
					<Typography>
						<Link href="/events">EVENTS</Link>
					</Typography><Typography>
						<Link href="/speakers">SPEAKERS</Link>
					</Typography><Typography>
						<Link href="/sponsors">SPONSORS</Link>
					</Typography>

				</Box>
				<Link href="/register">
					<Button
						variant='contained'
						sx={{ borderRadius: "100px" }}
					>
						Register
					</Button>
				</Link>
			</AppBar>
		</Stack>
	)
}

export default Header