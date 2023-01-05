import React from 'react';

import ReactDOM from 'react-dom/client';
import useDarkMode from 'use-dark-mode';

import App from './App';
import './config/i18n/i18n.ts';

const root = ReactDOM.createRoot(document.getElementById('root') as Element);

root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
