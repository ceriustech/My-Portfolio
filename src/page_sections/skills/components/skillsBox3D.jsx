import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

import Particles from './particles';
import RotatingBoxWithHTML from './rotatingBoxWithHtml';

const SkillsBox3D = ({ skills }) => {
	return (
		<div className="w-full h-[500px] relative">
			<Canvas camera={{ position: [5, 5, 5], fov: 30 }}>
				<ambientLight intensity={0.5} />
				<pointLight position={[10, 10, 10]} intensity={10} />
				<directionalLight position={[-5, 5, 5]} intensity={0.5} />
				<Particles />

				<RotatingBoxWithHTML skills={skills} />

				<OrbitControls
					enablePan={false}
					enableZoom={true}
					minDistance={5}
					maxDistance={10}
				/>
			</Canvas>
		</div>
	);
};

export default SkillsBox3D;
