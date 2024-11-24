export default class DrilldownMenu {
	constructor(menuSelector, toggleSelector) {
		this.menu = document.querySelector(menuSelector);
		this.toggleButton = document.querySelector(toggleSelector);
		this.backButton = this.menu.querySelector('.js-drilldown-back');
		this.closeButton = this.menu.querySelector('.js-drilldown-close');
		this.activeMenu = null;
		this.init();
	}

	init() {
		this.toggleButton.addEventListener('click', () => this.openMenu());
		this.closeButton.addEventListener('click', () => this.closeMenu());
		this.backButton.addEventListener('click', () => this.goBack());
		this.menu.addEventListener('click', e => this.handleMenuClick(e));
	}

	openMenu() {
		this.menu.classList.add('active');
		this.activeMenu = this.menu.querySelector('.js-drilldown-list');
	}

	closeMenu() {
		this.menu.classList.remove('active');
		this.resetMenu();
	}

	handleMenuClick(e) {
		const target = e.target.closest('[data-target]');
		if (!target) return;

		const submenuId = target.getAttribute('data-target');
		const submenu = this.menu.querySelector(submenuId);

		if (submenu) {
			this.activeMenu.classList.add('hidden');
			this.activeMenu = submenu;
			submenu.classList.add('active');
			this.menu.querySelector('.l-drilldown__header').classList.add('level-2'); // Показать кнопку "Назад"
		}
	}

	goBack() {
		if (!this.activeMenu) return;

		const parentMenu = this.activeMenu.closest('.js-drilldown-item').parentElement;
		this.activeMenu.classList.remove('active');
		this.activeMenu = parentMenu;
		this.activeMenu.classList.remove('hidden');
		this.menu.querySelector('.l-drilldown__header').classList.remove('level-2'); // Убрать кнопку "Назад"
	}

	resetMenu() {
		this.menu.querySelectorAll('.js-drilldown-submenu').forEach(submenu => {
			submenu.classList.remove('active', 'hidden');
		});
		this.menu.querySelector('.l-drilldown__header').classList.remove('level-2');
		this.activeMenu = this.menu.querySelector('.js-drilldown-list');
	}
}
