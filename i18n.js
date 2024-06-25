// i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import mrTranslations from './locales/mr.json';
import enTranslations from './locales/en.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      mr: { translation: mrTranslations },
      en: { translation: enTranslations },
    },
    lng: 'en', // Default language
    fallbackLng: 'en', // Fallback language
    interpolation: {
      escapeValue: false, // React already escapes values by default
    },
  });

export default i18n;
