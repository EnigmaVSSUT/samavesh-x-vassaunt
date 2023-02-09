import Layout from '@/components/layout/Layout'
import { Button, Stack, Typography, useMediaQuery } from '@mui/material'
import Link from 'next/link'
import { useEffect } from 'react'


const Home = () => {
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
					href='/'
				>
					<Button
						variant='contained'
					>
						Home
					</Button>
				</Link>
			</Stack>
		</Layout>
	)
}

export default Home