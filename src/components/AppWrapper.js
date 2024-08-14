import React, { useState, useEffect } from 'react';
import { IntlProvider } from 'react-intl';
import { flatten } from 'flat';

import enMessages from '../locales/en.json';
import arMessages from '../locales/ar.json';

const messages = {
  en: flatten(enMessages),
  ar: flatten(arMessages),
};

const AppWrapper = ({ children, pageContext = {} }) => {
  const { locale: initialLocale = 'en' } = pageContext;
  
  const [currentLocale, setCurrentLocale] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('userLanguage') || initialLocale;
    }
    return initialLocale;
  });

  useEffect(() => {
    document.documentElement.lang = currentLocale;
    document.documentElement.dir = currentLocale === 'ar' ? 'rtl' : 'ltr';
    if (typeof window !== 'undefined') {
      localStorage.setItem('userLanguage', currentLocale);
    }
  }, [currentLocale]);

  const toggleLocale = () => {
    const newLocale = currentLocale === 'en' ? 'ar' : 'en';
    if (typeof window !== 'undefined') {
      localStorage.setItem('userLanguage', newLocale);
      // Reload the page
      window.location.reload();
    }
  };

  return (
    <IntlProvider messages={messages[currentLocale]} locale={currentLocale} defaultLocale="en">
      {React.Children.map(children, child =>
        React.cloneElement(child, { toggleLocale })
      )}
    </IntlProvider>
  );
};

export default AppWrapper;