import { Html } from '@react-three/drei';

const SkillIcon = ({ skill, position }) => {
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

export default SkillIcon;
