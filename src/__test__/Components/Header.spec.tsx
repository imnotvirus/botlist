import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import Header from '../../components/Header';
import theme from '../../styles/theme';

describe('CardItem', () => {
	it('should be rendered name', () => {
		const { getByRole } = render(
			<ThemeProvider theme={theme}>
				<BrowserRouter>
					<Header />
				</BrowserRouter>
			</ThemeProvider>
		);
		const link = getByRole('link');

		expect(link).toHaveProperty('href', 'http://localhost/');
	});
});
