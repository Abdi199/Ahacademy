export default function header() {
	let isOpen = false;
	
	const navigation = document.querySelector('.header__navigation');
	const button = document.querySelector('.header__menu-button');
	const buttonIcon = document.querySelector('.header__menu-button img');
	
	button.addEventListener('click', handleButtonClick);
	
	function handleButtonClick() {
		isOpen = !isOpen;
		renderHTML();
	};
	
	function renderHTML() {
		renderNavigation();
		renderButtonIcon();

		function renderButtonIcon() {
			if (isOpen) {
				buttonIcon.src = '/_app/assets/svg/close.svg';
				buttonIcon.alt = 'Close menu';
			} else {
				buttonIcon.src = '/_app/assets/svg/menu.svg';
				buttonIcon.alt = 'Open menu';
			};
		};

		function renderNavigation() {
			if (isOpen) {
				navigation.classList.add('header__navigation--open');
			} else {
				navigation.classList.remove('header__navigation--open');
			};
		};
	};
};
