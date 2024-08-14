import React from 'react';
import NavBar from "./NavBar";
import Footer from "./Footer";
import { useIntl } from 'react-intl';
import AppWrapper from './AppWrapper';

const Layout = ({ children, pageContext, toggleLocale }) => {
  const intl = useIntl();

  return (
    <div className={`layout ${intl.locale === 'ar' ? 'rtl' : 'ltr'}`}>
      <NavBar toggleLocale={toggleLocale} />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

const WrappedLayout = ({ children, pageContext }) => (
  <AppWrapper pageContext={pageContext}>
    <Layout pageContext={pageContext}>{children}</Layout>
  </AppWrapper>
);

export default WrappedLayout;