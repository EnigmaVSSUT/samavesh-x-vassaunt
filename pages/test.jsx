import Mjolnir from "@/components/models/Mjolnir"
import { Canvas } from "@react-three/fiber"
import { useRef } from "react"

const Test = () => {
	const pointLightRef = useRef(null)

	return (
		<>
			<Canvas
				style={{
					height: 700
				}}
			>
				<perspectiveCamera />
				<ambientLight 
					intensity={0.2}
				/>
				<spotLight
					castShadow
					angle={90}
					// distance={3}
				>		
				<Mjolnir />
				</spotLight>
			</Canvas>
		</>
	)
}

export default Test