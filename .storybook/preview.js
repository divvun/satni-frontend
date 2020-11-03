import { addDecorator } from '@storybook/react';
import { setLinguiConfig, withLingui } from 'storybook-addon-linguijs';
import StoryWrapper from 'StoryWrapper';
import catalogSe from '../src/locales/se/messages.js';
import catalogNb from '../src/locales/nb/messages.js';
import catalogEn from '../src/locales/en/messages.js';

// Set configuration
const catalogs = {
  nb: catalogNb,
  se: catalogSe,
  en: catalogEn
};

setLinguiConfig({
  locales: ['en', 'nb', 'se'],
  defaultLocale: 'se',
  catalogs
});

// Register decorator
addDecorator(withLingui);
addDecorator(StoryWrapper);
