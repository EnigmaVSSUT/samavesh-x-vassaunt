import Layout from '@/components/layout/Layout'
import { Button, Stack, Typography, useMediaQuery } from '@mui/material'
import Link from 'next/link'
import { useEffect } from 'react'


const Home = () => {
	const isTouchDevice = useMediaQuery('(pointer: coarse)')

	useEffect(() => {
		console.log({isTouchDevice})
	}, [isTouchDevice])

	return (
		<Layout>
			<Typography
				variant='h1'
			>
				SAMAVESH X VASSAUNT huehue
			</Typography>
			<Stack
				direction='row'
				gap='16px'
			>
				<Button
					variant='contained'
				>
					Register
				</Button>
				<Link
					href='/about'
				>
					<Button
						variant='contained'
					>
						About
					</Button>
				</Link>
			</Stack>
		</Layout>
	)
}

export default Home