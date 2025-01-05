export default function initUploadPhoto({ uploadAreaSelector, fileInputSelector, uploadListSelector, maxFiles = 5 }) {
	const uploadArea = document.querySelector(uploadAreaSelector);
	const fileInput = document.querySelector(fileInputSelector);
	const uploadList = document.querySelector(uploadListSelector);

	if (!uploadArea || !fileInput || !uploadList) return;

	let files = [];

	// Обновление интерфейса
	function updateUI() {
		uploadList.innerHTML = '';

		files.forEach((file, index) => {
			const listItem = document.createElement('li');

			listItem.innerHTML = `
			<div class="l-content">
				<i class="icon-static-attachment" ></i>
				<span class="font-medium text-18-16 line-clamp-1">${file.name} (${(file.size / 1024).toFixed(1)} KB)</span>
			</div>

			<button  type="button" class="l-profile__upload-delete" data-index="${index}">
				<i class="icon-static-trash" ></i>
			</button>
		`;

			uploadList.appendChild(listItem);
		});

		// Отключение добавления новых файлов при достижении лимита
		if (files.length >= maxFiles) {
			uploadArea.classList.add('is-full');
			uploadArea.style.pointerEvents = 'none';
			uploadArea.querySelector('.l-profile__upload-text').textContent = 'Все фотографии загружены';
		} else {
			uploadArea.classList.remove('is-full');
			uploadArea.style.pointerEvents = 'auto';
			uploadArea.querySelector('.l-profile__upload-text').textContent = 'Загрузите до 5 фотографий';
		}
	}

	// Добавление файлов
	fileInput.addEventListener('change', event => {
		const newFiles = Array.from(event.target.files);

		// Проверка на превышение лимита
		if (files.length + newFiles.length > maxFiles) {
			alert(`Можно загрузить не более ${maxFiles} файлов`);
			return;
		}

		files = files.concat(newFiles);
		updateUI();

		// Очистка input
		fileInput.value = '';
	});

	// Удаление файлов
	uploadList.addEventListener('click', event => {
		if (event.target.classList.contains('l-profile__upload-delete')) {
			const index = parseInt(event.target.dataset.index, 10);
			files.splice(index, 1);
			updateUI();
		}
	});
}
