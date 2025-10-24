import * as Sentry from '@sentry/react';
import { createRoot } from 'react-dom/client';
import apolloClient from './apolloClient';
import satniStore from './configureStore';
import Root from './containers/Root';

Sentry.init({
  dsn: 'https://65960ebe11524e22b83637dfe43344a2@sentry.io/1303235',
});

const container = document.getElementById('root');
if (!container) throw new Error('Failed to find the root element');

const root = createRoot(container);
root.render(<Root store={satniStore} client={apolloClient} />);
