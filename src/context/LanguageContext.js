// src/context/LanguageContext.js
import React, { createContext, useState, useEffect } from 'react';
import { navigate } from 'gatsby';

export const LanguageContext = createContext({ locale: 'en', toggleLocale: () => {} }); // Default context

export const LanguageProvider = ({ children }) => {
const [locale, setLocale] = useState('en');

useEffect(() => {
const updateLocale = () => {
// Extract the locale from the current pathname
const pathParts = window.location.pathname.split('/').filter(Boolean);
const pathLocale = pathParts[0];


  // Check if the locale is valid
  if (pathLocale === 'ar' || pathLocale === 'en') {
    setLocale(pathLocale);
    localStorage.setItem('userLanguage', pathLocale);
  } else {
    // If the locale is invalid, redirect to saved or default locale
    const savedLocale = localStorage.getItem('userLanguage') || 'en';
    setLocale(savedLocale);
    navigate(`/${savedLocale}${window.location.pathname}`);
  }
};

updateLocale();

// Listen for browser navigation (back/forward)
window.addEventListener('popstate', updateLocale);

// Cleanup
return () => {
  window.removeEventListener('popstate', updateLocale);
};
}, []);

// Function to toggle locale
const toggleLocale = () => {
const newLocale = locale === 'en' ? 'ar' : 'en';
setLocale(newLocale);
localStorage.setItem('userLanguage', newLocale);


let pathParts = window.location.pathname.split('/').filter(Boolean);

// Check if the first part of the path is a locale and update it
if (pathParts[0] === 'en' || pathParts[0] === 'ar') {
  pathParts[0] = newLocale; // Update the locale in the path
} else {
  pathParts.unshift(newLocale); // Add the locale if it's absent
}

// Reconstruct the path and navigate
const newPath = `/${pathParts.join('/')}${window.location.search}`;
navigate(newPath);
};
return (
<LanguageContext.Provider value={{ locale, toggleLocale }}>
{children}
</LanguageContext.Provider>
);
};