import Room from '../room';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import HeroLights from '../hero_lights';
import { Suspense } from 'react';

import { useMediaQuery } from '../../../hooks/media_queries/utils';
import { QUERIES } from '../../../hooks/media_queries/constants';

const HeroExperience = () => {
	const isTablet = useMediaQuery({ query: QUERIES.isTablet });
	const isMobile = useMediaQuery({ query: QUERIES.isMobileOnly });

	return (
		<Canvas camera={{ position: [0, 0, 12], fov: 45 }}>
			<OrbitControls
				enablePan={false} // Prevents panning of the scene
				enableZoom={!isTablet} // Disables zoom on tablets
				maxDistance={20} // Maximum distance for zooming out
				minDistance={5} // Minimum distance for zooming in
				minPolarAngle={Math.PI / 5} // Minimum angle for vertical rotation
				maxPolarAngle={Math.PI / 2} // Maximum angle for vertical rotation
			/>
			<Suspense fallback={null}>
				<HeroLights />
				<group
					scale={isMobile ? 0.7 : 1}
					position={[0, -3.5, 0]}
					rotation={[0, -Math.PI / 4, 0]}
				>
					<Room />
				</group>
			</Suspense>
		</Canvas>
	);
};

export default HeroExperience;
