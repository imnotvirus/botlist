import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import Header from './components/Header';
import BotsProvider from './hooks/Bots';
import Home from './pages/Home';
import Global from './styles/global';
import theme from './styles/theme';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<ThemeProvider theme={theme}>
			<Global />
			<Header />
			<BotsProvider>
				<Home />
			</BotsProvider>
		</ThemeProvider>
	</React.StrictMode>
);
