import '../src/index.css'
import '../src/config/axiosConfig'
import enTranslation from '../public/locales/en/translation'
import React, { Suspense } from 'react';
import i18next from 'i18next';
import { I18nextProvider, initReactI18next } from 'react-i18next';

const i18n = i18next.use(initReactI18next).init({
  lng: 'en',
  debug: true,
  resources: {
    en: { translation: enTranslation }
  }
});

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  addDecorator: (storyFn => (
    <I18nextProvider i18n={i18n}>
      {storyFn()}
    </I18nextProvider>
  ))
}