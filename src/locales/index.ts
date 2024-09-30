import { I18n } from 'i18n-js';
import English from '@/locales/translations/en';
import Vietnamese from '@/locales/translations/vi';

const Locales = new I18n({
	en: English,
	vi: Vietnamese,
});

Locales.enableFallback = true;

export default Locales;
