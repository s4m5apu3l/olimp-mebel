export default function initMaska(selector) {
	if (!selector) return;
	const phoneElements = document.querySelectorAll(selector);

	phoneElements.forEach(element => {
		const rawPhone = element.textContent.trim();
		const mask = element.dataset.mask;

		// Форматируем телефон
		const formattedPhone = formatPhone(rawPhone, mask);
		if (formattedPhone) {
			element.textContent = formattedPhone;
		}
	});

	function formatPhone(phone, mask) {
		const numbers = phone.replace(/\D/g, ''); // Удаляем всё, кроме цифр
		let index = 0;

		return mask.replace(/#/g, () => numbers[index++] || '');
	}
}
