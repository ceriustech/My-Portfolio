import { images } from './Images';
import { defaultColors } from '../styles/globalstyles/colors.styles';

const lightGrayRed = defaultColors?.lightBackground.lightGrayishRed;
const lightGrayBlue = defaultColors?.lightBackground.lightGrayishBlue;
const lightGrayYellow = defaultColors?.lightBackground.lightGrayishYellow;
const paleCyan = defaultColors?.lightBackground.paleCyan;
const lightGrayishViolet = defaultColors?.lightBackground.lightGrayishViolet;
const lightGrayLimeGreen = defaultColors?.lightBackground.lightGrayishlimeGreen;
const lightGrayPink = defaultColors?.lightBackground.lightGrayishPink;
const lightGrayRed01 = defaultColors?.lightBackground.lightGrayishRed01;

export const skillsData = [
	{
		id: 'html',
		title: 'HTML5',
		image: images.html,
		color: lightGrayRed,
	},
	{
		id: 'css',
		title: 'CSS3',
		image: images.css,
		color: paleCyan,
	},
	{
		id: 'javascript',
		title: 'JavaScript',
		image: images.javascript,
		color: lightGrayYellow,
	},
	{
		id: 'react',
		title: 'React JS',
		image: images.react,
		color: lightGrayBlue,
	},
	{
		id: 'Redux',
		title: 'Redux',
		image: images.redux,
		color: lightGrayishViolet,
	},
	{
		id: 'nodejs',
		title: 'Node JS',
		image: images.node,
		color: lightGrayLimeGreen,
	},
	{
		id: 'sass',
		title: 'SASS',
		image: images.sass,
		color: lightGrayPink,
	},
	{
		id: 'git',
		title: 'Git',
		image: images.git,
		color: lightGrayRed,
	},
	{
		id: 'figma',
		title: 'Figma',
		image: images.figma,
		color: lightGrayRed,
	},
];
