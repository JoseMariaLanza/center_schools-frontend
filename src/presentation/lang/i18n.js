import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  es: {
    translation: {
      home: 'Inicio',
      schools: 'Escuelas',
      history: 'Historia',
      news: 'Noticias',
      sign_in: 'Iniciar Sesión',
      password: 'Contraseña',
      email: 'Correo electrónico',
      next: 'Siguiente',
    },
  },
  en: {
    translation: {
      sign_in: 'Sign in',
      password: 'Password',
      email: 'Email',
      next: 'Next',
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'en',

  keySeparator: false,

  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
