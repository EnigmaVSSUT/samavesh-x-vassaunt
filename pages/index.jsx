import { Button, Stack, Typography, useMediaQuery } from '@mui/material'
import { useEffect } from 'react'


const Home = () => {
	const isTouchDevice = useMediaQuery('(pointer: coarse)')

	useEffect(() => {
		console.log({isTouchDevice})
	}, [isTouchDevice])

	return (
		<Stack>
			<Typography
				variant='h1'
			>
				SAMAVESH X VASSAUNT huehue
			</Typography>
			<Button
				variant='contained'
			>
				Register
			</Button>
		</Stack>
	)
}

export default Home