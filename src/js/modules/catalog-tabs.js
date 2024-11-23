export default class CatalogTabs {
	constructor({ tabButtonsSelector, tabContentsSelector }) {
		this.tabButtons = document.querySelectorAll(tabButtonsSelector);
		this.tabContents = document.querySelectorAll(tabContentsSelector);
		this.currentIndex = 0; // Текущий активный таб
		this.lastHoveredIndex = null; // Последний таб, на который наведён указатель

		if (this.tabButtons.length === 0 || this.tabContents.length === 0) {
			console.error('CatalogTabs: кнопки или контент табов не найдены.');
			return;
		}
		this.initTabs();
	}

	// Инициализация табов
	initTabs() {
		this.tabButtons.forEach((button, index) => {
			button.addEventListener('mouseover', () => this.handleMouseOver(index));
			// button.addEventListener('mouseout', () => this.handleMouseOut(button));
		});
	}

	// activateInitialTab() {
	// 	this.switchTab(0); // Активируем первый таб
	// }

	// Обработчик события mouseout
	// handleMouseOut(button) {
	// 	button.classList.remove('hover');
	// }

	// Обработчик события mouseover
	handleMouseOver(index) {
		this.lastHoveredIndex = index;
		this.switchTab(index);
	}

	// Переключение таба
	switchTab(index) {
		if (this.currentIndex === index) return;

		this.tabButtons.forEach(btn => btn.classList.remove('active'));
		this.tabContents.forEach(content => content.classList.remove('active'));

		this.tabButtons[index].classList.add('active');
		this.tabContents[index].classList.add('active');

		this.currentIndex = index;
	}
}
