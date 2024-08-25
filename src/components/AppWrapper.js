// src/components/AppWrapper.js
import React, { useContext, useEffect } from 'react';
import { IntlProvider } from 'react-intl';
import { flatten } from 'flat';
import { LanguageContext } from '../context/LanguageContext';

import enMessages from '../locales/en.json';
import arMessages from '../locales/ar.json';

const messages = {
  en: flatten(enMessages),
  ar: flatten(arMessages),
};

const AppWrapper = ({ children }) => {
  const { locale } = useContext(LanguageContext);

  useEffect(() => {
    document.documentElement.lang = locale;
    document.documentElement.dir = locale === 'ar' ? 'rtl' : 'ltr';
  }, [locale]);

  return (
    <IntlProvider messages={messages[locale]} locale={locale} defaultLocale="en">
      {children}
    </IntlProvider>
  );
};

export default AppWrapper;
