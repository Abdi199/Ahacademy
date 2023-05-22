export default {
	title: 'Person',
	name: 'person',
	type: 'document',
	fields: [
		{
			title: 'Name',
			name: 'name',
			type: 'string',
			validation: Rule => Rule.required()
		},
		{
			title: 'Age',
			name: 'age',
			type: 'number',
		},
		{
			title: 'Image',
			name: 'image',
			type: 'image',
		},
		{
			title: 'Position',
			name: 'position',
			type: 'string',
		},
		{
			title: 'Occupation',
			name: 'occupation',
			type: 'string',
			options: {
				list: [
					{ title: 'Coach', value: 'Coach' },
					{ title: 'Player', value: 'Player' },
				],
				layout: 'radio'
			},
			validation: Rule => Rule.required()
		},
		{
			title: 'Priority',
			name: 'priority',
			type: 'number',
		}
	],

	preview: {
		select: {
			name: 'name',
			image: 'image',
			position: 'position',
			occupation: 'occupation',
		},

		prepare: (fields) => {
			return {
				title: fields.name,
				subtitle: `${fields.occupation}, ${fields.position}`,
				media: fields.image
			}
		}
	}
}