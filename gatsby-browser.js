import "./src/style/global.css";

import React from 'react';
import { LanguageProvider } from './src/context/LanguageContext';

export const wrapRootElement = ({ element }) => (
  <LanguageProvider>{element}</LanguageProvider>
);
export const onInitialClientRender = () => {
  if (window.location.pathname === "/") {
    window.location.replace("/en");
  }
};
