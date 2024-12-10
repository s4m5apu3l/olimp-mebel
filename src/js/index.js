// Галерея и лайтбоксы от Fancybox
import { Fancybox } from '@fancyapps/ui';
import '@fancyapps/ui/dist/fancybox/fancybox.css';

import Swiper from 'swiper';
import { Navigation, Autoplay, Thumbs } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

Fancybox.bind('[data-fancybox]', {
	dragToClose: false,
	closeButton: false
});

Fancybox.bind('[data-fancybox="gallery-reviews"]', {
	mainClass: 'l-reviews__gallery-modal',
	compact: false,
	idle: false,

	animated: false,
	showClass: false,
	hideClass: false,

	dragToClose: false,

	Images: {
		// Disable animation from/to thumbnail on start/close
		zoom: false
	},

	Toolbar: {
		items: {
			titleCustom: {
				tpl: '<span class="l-reviews__gallery-modal-title">Фото покупателей</span>'
			}
		},
		display: {
			left: ['titleCustom'],
			middle: [],
			right: ['close']
		}
	},

	Thumbs: {
		type: 'classic',
		Carousel: {
			axis: 'x',
			// center: function() {
			// 	return this.contentDim > this.viewportDim;
			// }
			// slidesPerPage: 1,
			// center: true,
			// fill: true,
			// dragFree: true
			breakpoints: {
				'(min-width: 740px)': {
					axis: 'y'
				}
			}
		}
	},

	Carousel: {
		// Remove the navigation arrows
		// Navigation: false
	}
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
			slidesPerView: 'auto'
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
new Swiper('.js-reviews-gallery-swiper', {
	slidesPerView: 2.2,
	spaceBetween: 8
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

	// ____SWIPERS_________

	if (document.querySelector('.js-product-gallery-swiper-thumb')) {
		var swiperProductGalleryThumb = new Swiper('.js-product-gallery-swiper-thumb', {
			spaceBetween: 8,
			slidesPerView: 2.4,
			freeMode: true,
			watchSlidesProgress: true,
			direction: 'horizontal',
			navigation: {
				nextEl: '.js-product-gallery-swiper__next',
				prevEl: '.js-product-gallery-swiper__prev'
			},
			modules: [Navigation],
			breakpoints: {
				560: {
					slidesPerView: 3.5
				},
				950: {
					direction: 'vertical',
					slidesPerView: 5.4
				}
			}
		});
	}
	new Swiper('.js-product-gallery-swiper', {
		spaceBetween: 10,
		slidesPerView: 1,
		thumbs: {
			swiper: swiperProductGalleryThumb
		},
		modules: [Thumbs]
	});

	// _____SWIPERS END_______

	initTabs({
		tabButtonsSelector: '.js-tab-btn',
		tabContentsSelector: '.js-tab-content'
	});

	initMaska('[data-mask]');
	const { MaskInput } = Maska;

	new MaskInput('[data-maska]');
});
