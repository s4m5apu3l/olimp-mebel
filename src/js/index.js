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
			spaceBetween: 16,
			slidesPerView: 'auto',
		}
	}
});

new Swiper('.js-order-cart-swiper', {
	slidesPerView: 1.9,
	spaceBetween: 8,
	direction: 'horizontal',
	breakpoints: {
		840: {
			direction: 'vertical',
			spaceBetween: 16,
			slidesPerView: 'auto'
		}
	}
});

import initDropdowns from './modules/dropdowns';
import CatalogTabs from './modules/catalog-tabs';
import DrilldownMenu from './modules/drilldown-menu';
import initTabs from './modules/tabs';
import initMaska from './modules/maska';

document.addEventListener('DOMContentLoaded', () => {
	initDropdowns();

	new CatalogTabs({
		tabButtonsSelector: '.js-catalog-link',
		tabContentsSelector: '.js-header-sublist'
	});

	new DrilldownMenu('#drilldown-menu', '.menu-toggle');

	initTabs({
		tabButtonsSelector: '.js-tab-btn',
		tabContentsSelector: '.js-tab-content'
	});

	initMaska('[data-mask]');
	const { MaskInput } = Maska;

	new MaskInput('[data-maska]');
});
