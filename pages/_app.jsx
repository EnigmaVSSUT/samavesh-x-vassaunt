// import Cursor from '@/components/cursor/Cursor'
import '@/styles/globals.css'
import { Stack } from '@mui/material'
import dynamic from 'next/dynamic'
import SVTheme from 'theme/SVTheme'

const Cursor = dynamic(() => import('@/components/cursor/Cursor'), {
	ssr: false
})

export default function App({ Component, pageProps }) {
  return (
		<SVTheme>
			<Stack
				minHeight='100vh'
			>
				<Cursor />
				<Component {...pageProps} />
			</Stack>
		</SVTheme>
	)
}
