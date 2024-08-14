import React, { useState, useEffect } from 'react';
import { IntlProvider } from 'react-intl';
import MainComponent from './path/to/your/MainComponent';

function Root() {
  const [messages, setMessages] = useState(null);
  const [locale, setLocale] = useState(navigator.language.split(/[-_]/)[0]);

  useEffect(() => {
    async function loadMessages() {
      try {
        const response = await fetch(`/locales/${locale}.json`);
        const messages = await response.json();
        setMessages(messages);
      } catch (error) {
        console.error('Failed to load messages:', error);
        // Fallback to default language if loading fails
        setLocale('en');
      }
    }

    loadMessages();
  }, [locale]);

  if (!messages) {
    return <div>Loading...</div>; // Or any loading indicator
  }

  return (
    <IntlProvider messages={messages} locale={locale} defaultLocale="en">
      <MainComponent />
    </IntlProvider>
  );
}

export default Root;