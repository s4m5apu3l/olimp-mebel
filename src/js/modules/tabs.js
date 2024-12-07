export default function initTabs({ tabButtonsSelector, tabContentsSelector, activeClass = 'active' }) {
	const tabButtons = document.querySelectorAll(tabButtonsSelector);
	const tabContents = document.querySelectorAll(tabContentsSelector);
	
	if (!tabButtons.length || !tabContents.length) return;

	tabButtons.forEach(button => {
		button.addEventListener('click', () => {
			const targetTab = button.dataset.tab;

			// Удаляем активный класс у всех кнопок и контента
			tabButtons.forEach(btn => btn.classList.remove(activeClass));
			tabContents.forEach(content => {
				content.classList.remove(activeClass);
				// content.style.display = 'none';
			});

			// Добавляем активный класс на активные элементы
			button.classList.add(activeClass);
			const targetContent = document.querySelector(`${tabContentsSelector}[data-tab="${targetTab}"]`);
			if (targetContent) {
				targetContent.classList.add(activeClass);
				// targetContent.style.display = 'block';
			}
		});
	});
}
