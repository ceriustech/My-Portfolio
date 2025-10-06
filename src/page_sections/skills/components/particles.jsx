import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';

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

export default Particles;
