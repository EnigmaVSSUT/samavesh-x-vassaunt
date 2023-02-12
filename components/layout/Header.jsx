import { Typography, Stack, Button, AppBar, Box } from "@mui/material"
import Link from "next/link";
const Header = () => {
	return (
		<Stack
			// padding='10px 32px'
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
				<Typography sx={{ color: "#C0000A" ,fontFamily: 'Formula Condensed',fontSize:"1.7rem"}}>SAMAVESH X VASSAUNT</Typography>
				<Box sx={{
					display: "flex",
					flexDirection: "row",

					padding: "0px",
					gap: "16px", color: "#000000", alignItems: "center"
				}}>
					<Typography variant="nav">
						<Link href="/theme">THEME</Link>
					</Typography>
					<Typography variant="nav">
						<Link href="/events">EVENTS</Link>
					</Typography><Typography variant="nav">
						<Link href="/speakers">SPEAKERS</Link>
					</Typography><Typography variant="nav">
						<Link href="/sponsors">SPONSORS</Link>
					</Typography>

				</Box>
				<Link href="/register">
					<Button
						variant='contained'
						sx={{ borderRadius: "20px",marginRight:"10px"}}
					>
						Register
					</Button>
					
					{/* <Link href="/login"> */}
					<Button
						variant='contained'
						sx={{ borderRadius: "20px" }}
					>
						Login
					</Button>
				</Link>
			</AppBar>
		</Stack>
	)
}

export default Header