export default {
	title: 'Person',
	name: 'person',
	type: 'document',
	fields: [
		{
			title: 'Name',
			name: 'name',
			type: 'string'
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
					{ title: 'Coach', value: 'coach' },
					{ title: 'Player', value: 'player' },
				],
				layout: 'radio'
			}
		}
	]
}