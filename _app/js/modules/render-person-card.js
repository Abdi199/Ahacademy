export default function renderPersonCard(person) {
	const cardListContainer = document.querySelector('.card-list__container');
	
	const personCard = document.createElement('div');
	const personImage = document.createElement('img');
	const personInfoContainer = document.createElement('div');
	const personName = document.createElement('p');
	const personPosition = document.createElement('p');

	personCard.className = 'person-card';
	personInfoContainer.className = 'person-info';
	personName.className = 'person-name';
	personPosition.className = 'person-position';

	personImage.src = `${person.image}`;
	personName.innerText = `${person.name}`.toUpperCase();
	personPosition.innerText = `${person.position}`;

	cardListContainer.append(personCard);
	personCard.append(personImage, personInfoContainer);
	personInfoContainer.append(personName, personPosition);
};