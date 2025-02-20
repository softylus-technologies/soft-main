// src/components/Layout.js
import React, { useContext } from 'react';
import NavBar from "./NavBar";
import Footer from "./Footer";
import AppWrapper from './AppWrapper';
import { LanguageContext } from '../context/LanguageContext';
import Whatsapp from './Whatsapp';
const Layout = ({ children, pageContext }) => {
  const { locale } = useContext(LanguageContext);

  return (
    <AppWrapper pageContext={pageContext}>
      <div className={`layout ${locale === 'ar' ? 'rtl' : 'ltr'}`}>
        <NavBar />
        <Whatsapp/>
        <main>{children}</main>
        <Footer />
      </div>
    </AppWrapper>
  );
};

export default Layout;
