import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Box, Points, PointMaterial } from '@react-three/drei';
import { Html } from '@react-three/drei';
import * as THREE from 'three';

import TitleHeader from '../../components/title_header';
import { TECH_STACK_ICONS } from '../../constants';

const Particles = () => {
	const particlesRef = useRef();
	const numParticles = 500;

	const positions = useMemo(() => {
		const pos = new Float32Array(numParticles * 3);
		for (let i = 0; i < numParticles * 3; i++) {
			pos[i] = (Math.random() - 0.5) * 10; // Spread in 3D space
		}
		return pos;
	}, []);

	useFrame(() => {
		if (particlesRef.current) {
			particlesRef.current.rotation.y += 0.001; // Slow drift
		}
	});

	return (
		<Points ref={particlesRef} positions={positions}>
			<PointMaterial
				color="#ffffff"
				size={0.03}
				sizeAttenuation
				transparent
				depthWrite={false}
			/>
		</Points>
	);
};

const SkillIconHTML = ({ skill, position }) => {
	return (
		<group position={position}>
			{/* Background */}
			<mesh>
				<planeGeometry args={[0.9, 0.9]} />
				<meshStandardMaterial color={skill.background} />
			</mesh>

			{/* HTML overlay for the icon */}
			<Html center transform position={[0, 0, 0.02]}>
				<div
					style={{
						width: '60px',
						height: '60px',
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
						justifyContent: 'center',
						pointerEvents: 'none',
					}}
				>
					<img
						src={skill.imgPath}
						alt={skill.name}
						style={{ width: '30px', height: '30px' }}
					/>
				</div>
			</Html>
		</group>
	);
};

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
					blending={THREE.NormalBlending}
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
									<SkillIconHTML
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

const Skills = () => {
	return (
		<div id="skills" className="flex-center section-padding">
			<div className="w-full h-full md:px-10 px-5 justify-items-center">
				<TitleHeader title="🤝 My skills" />

				{/* 3D Box for larger screens, grid for mobile */}
				<div className="w-full hover:cursor-grab">
					<SkillsBox3D skills={TECH_STACK_ICONS} />
				</div>

				{/* Your existing grid layout for mobile */}
				{/* <div className="lg:hidden tech-grid">
					{TECH_STACK_ICONS.map((techStackIcon) => (
						<div
							key={techStackIcon.name}
							className=" tech-card overflow-hidden group items-center"
						>
							<div className="tech-card-content">
								<div
									className="tech-icon-wrapper"
									style={{ backgroundColor: techStackIcon.background }}
								>
									<div>
										<img
											className="max-w-25"
											src={techStackIcon.imgPath}
											alt={techStackIcon.name}
										/>
									</div>
								</div>
								<div className="padding-x w-full">
									<p>{techStackIcon.name}</p>
								</div>
							</div>
						</div>
					))}
				</div> */}
			</div>
		</div>
	);
};

export default Skills;
