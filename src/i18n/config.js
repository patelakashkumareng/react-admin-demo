import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

i18n.use(initReactI18next).init({
    fallbackLng: 'en',
    debug: false,
    lng: 'hn',
    resources: {
        en: {
            translation: require('./locales/en/translation.json'),
            glossary: require('./locales/en/glossary.json')
        },
        hn: {
            translation: require('./locales/hn/translation.json'),
            glossary: require('./locales/hn/glossary.json')
        }
    },
    ns: ['translation', 'glossary'],
    defaultNS: 'translation'
})

i18n.languages = ["en", "hn"]

export default i18n