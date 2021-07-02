//import React from 'react';
import i18n from "i18next";
import {userTranslation , initReactI18next} from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';
import 'bootstrap/dist/js/bootstrap.js';
import 'bootstrap/dist/css/bootstrap.min.css';


i18n
.use(initReactI18next)
.use (LanguageDetector)
.use (HttpApi)
.init({
    

    fallbackLng: "en",
    detection:{
        order:[ 'cookie' , 'htmlTag' , 'localStorage' ,'path' , 'subdomain'],
        cashes:['cookie']
    },
    backend:{
        loadPath: 'assets/locales/{{lng}}/translation.json',
    },
    react: {useSuspense: false},

});

function App(){
    const {t} = userTranslation();
    return <h2>{t('welcome_to_react')}</h2>;
}