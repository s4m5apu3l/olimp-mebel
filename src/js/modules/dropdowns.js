function initDropdowns() {
	document.addEventListener('click', event => {
		const toggle = event.target.closest('.js-dropdown-btn');
		if (toggle) {
			// Найти родительский элемент дропдауна
			const dropdown = toggle.closest('.js-dropdown');

			// Закрыть все открытые дропдауны, кроме текущего
			document.querySelectorAll('.js-dropdown').forEach(dd => {
				if (dd !== dropdown) {
					dd.classList.remove('active');
				}
			});

			// Переключить состояние текущего дропдауна
			dropdown.classList.toggle('active');
		} else {
			// Если клик вне дропдауна, закрыть все
			document.querySelectorAll('.js-dropdown').forEach(dd => {
				dd.classList.remove('active');
			});
		}
	});
}
export default initDropdowns;
