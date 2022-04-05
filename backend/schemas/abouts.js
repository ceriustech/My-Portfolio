export default {
	name: 'abouts',
	title: 'Abouts',
	type: 'document',
	fields: [
		{
			name: 'title',
			title: 'Title',
			type: 'string',
		},
		{
			name: 'description',
			title: 'Description',
			type: 'string',
		},
		{
			name: 'imgUrl',
			title: 'ImgUrl',
			type: 'image',
			options: {
				hotspot: true,
			},
		},
		{
			name: 'altText',
			title: 'Alt Text',
			type: 'string',
		},
		{
			name: 'color',
			title: 'Color',
			type: 'string',
		},
	],
};
