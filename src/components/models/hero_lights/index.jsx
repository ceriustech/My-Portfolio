const HeroLights = () => {
	return (
		<>
			<spotLight
				position={[2, 5, 6]}
				angle={0.15}
				penumbra={0.2}
				intensity={100}
				color="white"
			/>
			<spotLight
				position={[4, 5, 4]}
				angle={0.3}
				penumbra={0.5}
				intensity={40}
				color="#4CC9F0"
			/>
			<spotLight
				position={[-3, 5, 5]}
				angle={0.4}
				penumbra={1}
				intensity={90}
				color="#6B5E5E"
			/>{' '}
		</>
	);
};

export default HeroLights;
