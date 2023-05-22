import { sanity } from '../sanity.js';

export async function getAllCoaches() {
	const query = `*[_type == 'person' && occupation == 'Coach'] | order(priority asc) {
		name,
		occupation,
		"image": image.asset-> url,
		age,
		position
	 }`;

	const coaches = await sanity.fetch(query);

	return coaches;
}