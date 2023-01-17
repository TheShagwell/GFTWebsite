import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './index.css'
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import NavbarProvider from './context/NavbarContext'
import 'react-toastify/dist/ReactToastify.css';

// import 'bootstrap/dist/css/bootstrap.min.css';

// FOR LANGUAGE
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';
import i18next from 'i18next'


const languages = ['en', 'yo', 'fr'] // You can add others later on like this  -> ['fr', 'ar', 'hau', 'yo'
i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .use(LanguageDetector)
  .use(HttpApi)
  .init({
    supportedLngs: languages,
    fallbackLng: "en",
    detection: {
      order: ['cookie', ' htmlTag', 'localStorage', 'path', 'subdomain'],
      caches: ['cookie']
    },
    backend: {
      loadPath: '/assets/locales/{{lng}}/translation.json',
    }
  });


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <NavbarProvider>
        <App />
      </NavbarProvider>
    </BrowserRouter>
  </React.StrictMode>
)
