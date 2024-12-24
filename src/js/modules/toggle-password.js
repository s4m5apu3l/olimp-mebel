export default function initPasswordToggle(selector) {
	const passwordBtn = document.querySelectorAll(selector);

	if (!passwordBtn) return;

	passwordBtn.forEach(button => {
		const inputContainer = button.closest('.input-group__container');
		const passwordInput = inputContainer.querySelector('.auth-password');
		const hidePassword = button.querySelector('.icon--password-hide');
		const showPassword = button.querySelector('.icon--password-show');

		button.addEventListener('click', () => {
			const isPassword = passwordInput.getAttribute('type') === 'password';
			passwordInput.setAttribute('type', isPassword ? 'text' : 'password');

			hidePassword.style.display = isPassword ? 'none' : 'block';
			showPassword.style.display = isPassword ? 'block' : 'none';
		});
	});
}
