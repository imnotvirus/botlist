import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import Home from '../../pages/Home';
import theme from '../../styles/theme';

describe('Home', () => {
	it('show name page', () => {
		const { getByText } = render(
			<ThemeProvider theme={theme}>
				<Home />
			</ThemeProvider>
		);

		expect(getByText('My chatbots')).toBeTruthy();
	});
});
