import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import Header from './components/Header';
import BotsProvider from './hooks/Bots';
import Detail from './pages/Detail';
import Home from './pages/Home';
import Global from './styles/global';
import theme from './styles/theme';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<ThemeProvider theme={theme}>
			<Global />
			<BotsProvider>
				<BrowserRouter>
					<Header />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/bot/:shortName" element={<Detail />} />
					</Routes>
				</BrowserRouter>
			</BotsProvider>
		</ThemeProvider>
	</React.StrictMode>
);
