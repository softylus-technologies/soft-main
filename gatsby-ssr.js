import "./src/style/global.css";
import React from 'react';
import AppWrapper from './src/components/AppWrapper';

export const wrapPageElement = ({ element, props }) => {
  return <AppWrapper {...props}>{element}</AppWrapper>;
};