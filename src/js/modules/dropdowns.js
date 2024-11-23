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
			if (toggle.classList.contains('js-catalog-btn')) {
				document.body.classList.toggle('no-scroll');
				document.body.classList.toggle('catalog-active');
			} else {
				document.body.classList.remove('no-scroll');
				document.body.classList.remove('catalog-active');
			}
		} else {
			// Если клик вне дропдауна, закрыть все
			document.querySelectorAll('.js-dropdown').forEach(dd => {
				dd.classList.remove('active');
			});
			document.body.classList.remove('no-scroll');
			document.body.classList.remove('catalog-active');
		}
	});
}
export default initDropdowns;
