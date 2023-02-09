import { motion } from "framer-motion"

const variants = {
	hidden: { opacity: 0, x: -200, y: 0 },
	enter: { opacity: 1, x: 0, y: 0 },
	exit: { opacity: 0, x: 0, y: -100 },
}

const Layout = ({ children }) => {
	return (
		<motion.div
			initial="hidden"
			animate="enter"
			exit="exit"
			variants={variants}
			transition={{
				duration: 1,
				ease: 'linear'
			}}
			style={{
				height: '100vh'
			}}
		>
			{children}
		</motion.div>
	)
}

export default Layout