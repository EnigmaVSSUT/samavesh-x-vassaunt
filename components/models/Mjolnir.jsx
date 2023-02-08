import { useLoader } from "@react-three/fiber";
import { Suspense } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

// import mjolnirGLTF from '@/lib/gltf/mjolnir_thors_hammer/scene.gltf'

const Mjolnir = () => {
	const mjolnir = useLoader(GLTFLoader, '/gltf/mjolnir/scene.gltf')

	return (
		<Suspense>
			<primitive 
				object={mjolnir.scene}
				position={[100, -70, -1000]}
			/>
		</Suspense>
	);
}

export default Mjolnir;