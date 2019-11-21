
import { initReactI18next } from 'react-i18next';
import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-xhr-backend';

i18n
    .use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        fallbackLng: false,
        debug: process.env.REACT_APP_DEBUG === 'true',
        backend: {
            backendOptions :
            {
                loadPath: `locales/{{ns}}/{{lng}}.json`,
            },
            loadPath: `locales/{{ns}}/{{lng}}.json`
        }, 
        interpolation: {
            escapeValue: false,
        }

    });

export default i18n;