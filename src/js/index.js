// Галерея и лайтбоксы от Fancybox
import { Fancybox } from '@fancyapps/ui';
import '@fancyapps/ui/dist/fancybox/fancybox.css';
//
// import Swiper from 'swiper/bundle';
// import 'swiper/css/bundle';
import Swiper from 'swiper';
import { Navigation, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

Fancybox.bind('[data-fancybox]', {
	// Your custom options
});

new Swiper('.js-banner-main', {
	slidesPerView: 1,
	spaceBetween: 8,
	// loop: true,
	navigation: {
		nextEl: '.js-banner-main__next',
		prevEl: '.js-banner-main__prev'
	},
	// autoplay: {
	// 	delay: 4000,
	// 	disableOnInteraction: false
	// },
	centeredSlides: true,

	modules: [Navigation, Autoplay]
});


import initDropdowns from './modules/dropdowns';
import CatalogTabs from './modules/catalog-tabs';
import DrilldownMenu from './modules/drilldown-menu';

window.addEventListener('DOMContentLoaded', () => {
	// dropdowns
	initDropdowns();
	new CatalogTabs({
		tabButtonsSelector: '.js-catalog-link',
		tabContentsSelector: '.js-header-sublist'
	});
	new DrilldownMenu('#drilldown-menu', '.menu-toggle');
});
