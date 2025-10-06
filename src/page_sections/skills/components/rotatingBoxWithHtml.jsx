import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Box } from '@react-three/drei';
import { NormalBlending } from 'three';

import SkillIcon from './skillIcon';

const RotatingBoxWithHTML = ({ skills }) => {
	const meshRef = useRef();

	useFrame((state, delta) => {
		if (meshRef.current) {
			meshRef.current.rotation.x += delta * 0.05;
			meshRef.current.rotation.y += delta * 0.05;
		}
	});

	// Define face positions and rotations
	const faces = [
		{ position: [0, 0, 1.5], rotation: [0, 0, 0] }, // front
		{ position: [0, 0, -1.5], rotation: [0, Math.PI, 0] }, // back
		{ position: [1.5, 0, 0], rotation: [0, Math.PI / 2, 0] }, // right
		{ position: [-1.5, 0, 0], rotation: [0, -Math.PI / 2, 0] }, // left
		{ position: [0, 1.5, 0], rotation: [-Math.PI / 2, 0, 0] }, // top
		{ position: [0, -1.5, 0], rotation: [Math.PI / 2, 0, 0] }, // bottom
	];

	return (
		<group ref={meshRef}>
			<Box args={[3, 3, 3]}>
				<meshStandardMaterial
					color="#2d2d2d"
					transparent={true}
					opacity={0.95}
					depthWrite={false}
					blending={NormalBlending}
				/>
				{/* Lightened from #1a1a1a */}
			</Box>

			{faces.map((face, faceIndex) => (
				<group
					key={faceIndex}
					position={face.position}
					rotation={face.rotation}
				>
					<mesh>
						<planeGeometry args={[2.8, 2.8]} />
						<meshStandardMaterial color="#3a3a3a" />
						{/* Lightened from #2a2a2a */}
					</mesh>

					{/* Grid of skill icons for this face */}
					<group>
						{skills
							.slice(faceIndex * 4, (faceIndex + 1) * 4)
							.map((skill, idx) => {
								const x = ((idx % 2) - 0.5) * 1.2;
								const y = (Math.floor(idx / 2) - 0.5) * 1.2;

								return (
									<SkillIcon
										key={skill.name}
										skill={skill}
										position={[x, y, 0.05]}
									/>
								);
							})}
					</group>
				</group>
			))}
		</group>
	);
};

export default RotatingBoxWithHTML;
