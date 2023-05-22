import person from "../../_studio/schemas/documents/person.js";
import { getAllPlayers } from "./modules/get-all-players.js";
import { getAllCoaches } from "./modules/get-all-coaches.js";
import renderPersonCard from "./modules/render-person-card.js";
import getBySearch from "./modules/get-by-search.js";


const players = await getAllPlayers();
const coaches = await getAllCoaches();

if (window.location.pathname === '/players/') {
	players.forEach(person => {
		renderPersonCard(person)
	});
}

if (window.location.pathname === '/coaches/') {
	coaches.forEach(person => {
		renderPersonCard(person)
	});
}

getBySearch(coaches)