export default function getBySearch(persons) {
	const personList = persons;

	const searchField = document.querySelector('.search-input');

	if (searchField) {
		searchField.addEventListener('keyup', handleInputSearch);
	}

	function handleInputSearch() {
		const searchValue = getSearchValue()
		debounce(sortListBySearch(searchValue), 300)
	}
	
	function sortListBySearch(search) {
		const personCardList = document.querySelectorAll('.person-card');
		for (const [index, person] of personCardList.entries()) {
			person.classList.add('person-card--hidden');

			if (personList[index].name.toLowerCase().includes(search.toLowerCase())) {
				person.classList.remove('person-card--hidden')
			}
		}
	}

	
	const debounce = (func, wait) => {
		let timeout; 
		
		return function executedFunction(...args) {
			const later = () => {
				clearTimeout(timeout);
				func(...args);
			};
			
			clearTimeout(timeout);
			timeout = setTimeout(later, wait);
		};
	}
	
	function getSearchValue() {
		const searchValue = searchField.value;
	
		return searchValue
	}
}