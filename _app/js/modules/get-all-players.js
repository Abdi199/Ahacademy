import { sanity } from '../sanity.js';

export async function getAllPlayers() {
	const query = `*[_type == 'person' && occupation == 'Player'] {
		name,
		occupation,
		"image": image.asset-> url,
		age,
		position
	 }`;

	const players = await sanity.fetch(query);

	return players;
}