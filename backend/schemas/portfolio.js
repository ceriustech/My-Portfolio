export default {
	name: 'portfolio',
	title: 'Portfolio',
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
			name: 'releaseDate',
			title: 'Release Date',
			type: 'string',
		},
		{
			name: 'released',
			title: 'Released',
			type: 'boolean',
			initialValue: false,
		},
		{
			name: 'projectLink',
			title: 'Project Link',
			type: 'string',
		},
		{
			name: 'codeLink',
			title: 'Code Link',
			type: 'string',
		},
		{
			name: 'routeID',
			title: 'Route ID',
			type: 'string',
		},
		{
			name: 'imgUrl',
			title: 'ImageUrl',
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
			name: 'tags',
			title: 'Tags',
			type: 'array',
			of: [
				{
					name: 'tag',
					title: 'Tag',
					type: 'string',
				},
			],
		},
	],
};
