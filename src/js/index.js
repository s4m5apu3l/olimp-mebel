// Галерея и лайтбоксы от Fancybox
import { Fancybox } from '@fancyapps/ui';
import '@fancyapps/ui/dist/fancybox/fancybox.css';

import Swiper from 'swiper';
import { Navigation, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

Fancybox.bind('[data-fancybox]', {
	dragToClose: false,
	closeButton: false
});

new Swiper('.js-banner-main', {
	slidesPerView: 1,
	spaceBetween: 8,
	// loop: true,
	navigation: {
		nextEl: '.js-banner-main__next',
		prevEl: '.js-banner-main__prev'
	},
	autoplay: {
		delay: 4000,
		disableOnInteraction: false
	},
	centeredSlides: true,

	modules: [Navigation, Autoplay]
});

new Swiper('.js-pay-methods', {
	slidesPerView: 'auto',
	spaceBetween: 8,
	navigation: {
		nextEl: '.js-pay-method__next',
		prevEl: '.js-pay-method__prev'
	},
	modules: [Navigation],
	breakpoints: {
		840: {
			spaceBetween: 16
		}
	}
});

import initDropdowns from './modules/dropdowns';
import CatalogTabs from './modules/catalog-tabs';
import DrilldownMenu from './modules/drilldown-menu';

document.addEventListener('DOMContentLoaded', () => {
	initDropdowns();
	new CatalogTabs({
		tabButtonsSelector: '.js-catalog-link',
		tabContentsSelector: '.js-header-sublist'
	});
	new DrilldownMenu('#drilldown-menu', '.menu-toggle');

	// __________MODAL START_______________
	const consentCheckbox = document.getElementById('consent');
	const submitButton = document.querySelector('.modal-submit-btn');

	function toggleSubmitButton() {
		submitButton.disabled = !consentCheckbox.checked; // Включаем кнопку только если чекбокс нажат
	}

	consentCheckbox.addEventListener('change', toggleSubmitButton);

	toggleSubmitButton();
	// ___________MODAL END_______________
});
