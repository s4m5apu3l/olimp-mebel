// Галерея и лайтбоксы от Fancybox
import { Fancybox } from '@fancyapps/ui';
import '@fancyapps/ui/dist/fancybox/fancybox.css';

Fancybox.bind('[data-fancybox]', {
	// Your custom options
});

// Мобильная навигация
// import mobileNav from './modules/mobile-nav';
// mobileNav();
import initDropdowns from './modules/dropdowns';
import CatalogTabs from './modules/catalog-tabs.js';

new CatalogTabs({
	tabButtonsSelector: '.js-catalog-link',
	tabContentsSelector: '.js-header-sublist'
});
window.addEventListener('DOMContentLoaded', () => {
	// dropdowns
	initDropdowns();
});
